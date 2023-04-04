"use strict";

// canvas template
var canvas = document.querySelector('.myCanvas');
var ctx = canvas.getContext('2d');
var width = canvas.width = window.innerWidth - 10;
var height = canvas.height = window.innerHeight - 20; // gonna make a full sized canvas with a little bit of ground leeway
// now you can clearred fillrect fillstyle arc on the ctx

ctx.fillStyle = 'red';
ctx.fillRect(100, 100, 100, 100);
ctx.strokeStyle = 'blue';
ctx.strokeRect(300, 200, 100, 100);
ctx.lineWidth = 20;
ctx.arc(500, 200, 50, 0, Math.PI * 2);
ctx.stroke();
ctx.fill();
ctx.moveTo(600, 300);
ctx.lineTo(700, 400);
ctx.lineTo(500, 500); //ctx.lineTo(300,400);
//ctx.lineTo(600,300);

ctx.fill(); // for animations

var sleep = function sleep(ms) {
  return new Promise(function (res) {
    return setTimeout(res, ms);
  });
};

var thex = 100;
var vx = 0;
var they = 100;
var vy = 0; // main loop

(function _callee() {
  var lucid;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          lucid = 0; // while (lucid < 700){
          //   ctx.clearRect(0,0,window.innerWidth, window.innerHeight);
          //   ctx.strokeRect(100,lucid,100,100);
          //   lucid += 1;
          //   await sleep(); // standard delay
          // }

        case 1:
          if (!true) {
            _context.next = 16;
            break;
          }

          ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
          ctx.strokeRect(thex, they, 100, 100);
          thex += vx;
          vx = vx * 0.99;
          they += vy;
          vy = vy * 0.99;

          if (thex < 0) {
            vx = Math.abs(vx);
          }

          if (thex > window.innerWidth) {
            vx = -Math.abs(vx);
          }

          if (they < 0) {
            vy = Math.abs(vy);
          }

          if (thex > window.innerHeight) {
            vy = -Math.abs(vy);
          }

          _context.next = 14;
          return regeneratorRuntime.awrap(sleep());

        case 14:
          _context.next = 1;
          break;

        case 16:
        case "end":
          return _context.stop();
      }
    }
  });
})(); // ok thats it for the main loop
// keypress processing


(function _callee2() {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          window.addEventListener("keydown", function (event) {
            if (event.defaultPrevented) {
              return;
            }

            var actkey = event.code.replace('Key', '');
            var filterletters = 'QWERTYUIOPASDFGHJKLZXCVBNM';

            if (actkey == 'ArrowLeft') {
              vx -= 5;
            } else if (actkey == 'ArrowRight') {
              vx += 5;
            }

            if (actkey == 'ArrowUp') {
              vy -= 5;
            } else if (actkey == 'ArrowDown') {
              vy += 5;
            }
          }, true);

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  });
})();