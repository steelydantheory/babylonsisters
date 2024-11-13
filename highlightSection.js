document.addEventListener("DOMContentLoaded", function() {
  const contentsMenu = document.querySelector("#contents");
  const links = contentsMenu.querySelectorAll("a");
  const sections = Array.from(links).map(link => document.querySelector(link.getAttribute("href")));

  let sectionPositions = [];
  function calculatePositions() {
    sectionPositions = sections.map(section => section.offsetTop);
  }

  function highlightCurrentSection() {
    const scrollPosition = window.scrollY;
    if (scrollPosition < sectionPositions[0]) {
      // If scroll position is before the first H2
      links.forEach(link => link.classList.add("active"));
    } else {
      // Highlight the section that is at the top of the viewport
      let index = sectionPositions.findIndex(position => scrollPosition < position) - 1;
      if (index < 0) index = sections.length - 1; // Highlight last item if we scrolled past the last section
      
      links.forEach(link => link.classList.remove("active"));
      if (index >= 0) {
        links[index].classList.add("active");
      }
    }
  }

  function onScroll() {
    highlightCurrentSection();
  }

  function onResize() {
    calculatePositions();
    highlightCurrentSection();
  }

  function onClick(event) {
    links.forEach(link => link.classList.remove("active"));
    event.target.classList.add("active");
  }

  // Ensure positions are calculated after canvas elements are loaded
  window.addEventListener("load", calculatePositions);
  window.addEventListener("resize", onResize);
  window.addEventListener("scroll", onScroll);
  window.addEventListener("osmd-render-complete", calculatePositions);

  window.addEventListener("osmd-render-complete", function() {
    console.log("Loaded");
  });

  // Attach click event listeners to links
  links.forEach(link => link.addEventListener("click", onClick));

  // Initial calculation
  calculatePositions();
  highlightCurrentSection();
});
