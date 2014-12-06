//MAGIC
(function() {
  var link      = document.getElementById('favicon');
  var canvas    = document.getElementById('canvas');
  var ctx       = canvas.getContext('2d');
  var width     = canvas.width;
  var height    = canvas.height;
  var imageData = ctx.createImageData(width, height);

  window.requestAnimationFrame =  window.requestAnimationFrame        || window.mozRequestAnimationFrame ||
                                  window.webkitRequestAnimationFrame  || window.msRequestAnimationFrame;

  window.requestAnimationFrame(function renderFrame(timestamp) {
    var time = timestamp / 800.0;
    var pos   = 0;
    for (var x = 0; x < width; x++ ) {
      for (var y = 0; y < height; y++) {
        var v     = 0.0;
        var scale = 5.5;
        var sx    = (x / width - 0.5) * scale - scale / 2.0;
        var sy    = (y / height - 0.5) * scale - scale / 2.0;
        v         += Math.sin( sx + time );
        v         += Math.sin( (sy + time) / 2.0 );
        v         += Math.sin( (sx + sy + time) / 2.0 );
        sx        += scale / 2.0 * Math.sin( time / 3.0 );
        sy        += scale / 2.0 * Math.cos( time / 2.0 );
        v         += Math.sin( Math.sqrt( sx * sx + sy * sy + 1.0 ) + time );
        v         /= 3.0;

        imageData.data[pos++] = Math.sin(v * Math.PI) * 255;
        imageData.data[pos++] = Math.cos(v * Math.PI) * 255;
        imageData.data[pos++] = 255;
        imageData.data[pos++] = 255;
      }
    }
    ctx.putImageData(imageData, 0, 0);
    
    requestAnimationFrame(renderFrame);
  });
})();
