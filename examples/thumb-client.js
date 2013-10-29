
var net = require('net');
var cell = require('..');

setInterval(function(){
  var sock = net.connect(3000);
  var actor = cell(sock);

  console.log('send image for thumbs');
  var img = new Buffer('faux image');
  actor.send('image thumbnails', img, ['150x150', '300x300']);

  actor.on('thumb', function(size, img){
    console.log('thumb: %s', size);
  });
}, 500);