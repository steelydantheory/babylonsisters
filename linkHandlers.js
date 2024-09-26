document.addEventListener("DOMContentLoaded", function() {

  document.getElementById('email-link').addEventListener('click', function(event) {
    event.preventDefault();

    const username = "steelydantheory";
    const domain = "gmail.com";
    const email = username + '@' + domain;
    const subject = encodeURIComponent("re: Babylon Sisters");

    window.location.href = "mailto:" + email + "?subject=" + subject;
  });
});