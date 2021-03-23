let r = 0xf;
let g = 0xf;
let b = 0xf;

setInterval(
    function () {
      var Color = r.toString(16) + g.toString(16) + b.toString(16);
      document.body.style.backgroundColor = '#'+Color;
      if (Math.floor((Math.random() * 10) + 1) % 2 === 0) {r -= Math.floor((Math.random() * 0x3f) + 1);} else {r += Math.floor((Math.random() * 0x3f) + 1);}
      if (Math.floor((Math.random() * 10) + 1) % 2 === 0) {g -= Math.floor((Math.random() * 0x3f) + 1);} else {g += Math.floor((Math.random() * 0x3f) + 1);}
      if (Math.floor((Math.random() * 10) + 1) % 2 === 0) {b -= Math.floor((Math.random() * 0x3f) + 1);} else {b += Math.floor((Math.random() * 0x3f) + 1);}
      if (r > 255) {r = 0xf;} else if (r < 16) {r = 255;}
      if (g > 255) {g = 0xf;} else if (g < 16) {g = 255;}
      if (b > 255) {b = 0xf;} else if (b < 16) {b = 255;}
    },160);

$( function() {
  $('.draggable').draggable();
} );
