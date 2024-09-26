window.onload = function() {

  function deleteCursorImages() {
    var cursorImages = document.querySelectorAll('[id^="cursorImg-"]');
    cursorImages.forEach(function(img) {
      img.parentNode.removeChild(img);
    });
  }

  var fileNames = [
    "ExBbMajor",
    "ExBbMinor",
    "ExDbMajor",
    "ExDbMinor",
    "ExBbAeolian",
    "ExBbDorian",
    "ExBbMixolydian",
    "ExBbIoanian",
    "ExBackdoorMediantBb",
    "BSIntro1",
    "BSIntro2",
    "BSIntro3",
    "BSIntro4",
    "BSIntro5",
    "BSVerseOne1",
    "BSVerseOne2",
    "BSVerseOne3",
    "BSVerseOne4",
    "BSVerseOne5",
    "BSChorusOne1",
    "BSChorusOne2",
    "BSChorusOne3",
    "BSChorusOne4",
    "BSBridgeOne1",
    "BSBridgeOne2",
    "BSBridgeTwo1",
    "BSSolo1",
    "BSCoda1",
    "BSCoda2"
  ];

  let scoresRendered = 0;
  const totalScores = fileNames.length;

  fileNames.forEach(function(fileName) {
    const divId = "osmd-" + fileName;
    const div = document.getElementById(divId);

    if(div) {
      var osmd = new opensheetmusicdisplay.OpenSheetMusicDisplay(div, {
        backend: "canvas",
        autoResize: true,
      });

      const partNames = (fileName === "BSIntro1") ? true : false; 
      const timeSig = (fileName === "BSIntro1") ? true : false; 
      const zoom = (window.innerWidth > 767) ? 0.65 : 0.5;

      fetch('musicxml/' + fileName + '.musicxml')
      .then(response => response.text())
      .then(data => {
        osmd.load(data).then(() => {
          osmd.EngravingRules.PageTopMargin = 0;
          osmd.EngravingRules.PageBottomMargin = 0;
          osmd.EngravingRules.PageLeftMargin = 0;
          osmd.EngravingRules.PageRightMargin = 1;
          osmd.EngravingRules.RenderPartNames = partNames;
          osmd.EngravingRules.RenderTimeSignatures = timeSig;
          osmd.EngravingRules.RenderMeasureNumbers = false;
          osmd.Zoom = zoom;
          osmd.EngravingRules.DefaultFontFamily = "neue-haas-unica";
          osmd.EngravingRules.RenderTitle = false;
          osmd.EngravingRules.applyDefaultColorMusic("#121717");
          osmd.render();

          scoresRendered++;

          if (scoresRendered === totalScores) {
            window.dispatchEvent(new Event('osmd-render-complete'));
            deleteCursorImages();
          }
        });
      });
    }
  });
}

