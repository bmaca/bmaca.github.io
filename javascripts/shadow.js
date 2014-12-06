
(functionn() {
  var shine = new Shine(document.getElementById('title'));
  shine.config.opacity    = 0.4;
  shine.config.numSteps   = 10;
  shine.config.shadowRGB  = new shinejs.Color(128, 128, 128);
  window.addEventListener('mousemove', function(event) {
    shine.light.position.x = event.clientX;
    shine.light.position.y = event.clientY;
    shine.draw();
  }, false);
})();
