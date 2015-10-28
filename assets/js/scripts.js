Reveal.initialize({
  controls: false,
  dependencies: [
    { src: '/assets/js/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } }
  ],
  height: 720,
  history: true,
  /*
  keyboard: {
    27: function() { console.log("ESC pressed"); return true },
    37: function() { console.log("LEFT pressed"); return true },
    38: function() { console.log("UP pressed"); return true },
    39: function() { console.log("RIGHT pressed"); return true },
    40: function() { console.log("DOWN pressed"); return true },
    66: function() { console.log("b pressed"); return true },
    116: function() { console.log("F5 pressed"); return true }
  },
  */
  transition: "convex",
  width: 1280
});
