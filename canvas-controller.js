// canvas template

const canvas = document.querySelector('.myCanvas');
const ctx = canvas.getContext('2d');
const width = canvas.width = window.innerWidth-10; 
const height = canvas.height = window.innerHeight-20; // gonna make a full sized canvas with a little bit of ground leeway

// now you can clearred fillrect fillstyle arc on the ctx

ctx.fillStyle = 'red';
ctx.fillRect(100,100,100,100);

ctx.strokeStyle = 'blue';
ctx.strokeRect(300,200,100,100);

ctx.lineWidth = 20;

ctx.arc(500,200,50,0,Math.PI*2);
ctx.stroke();
ctx.fill();

ctx.moveTo(600,300);
ctx.lineTo(700,400);
ctx.lineTo(500,500);
//ctx.lineTo(300,400);
//ctx.lineTo(600,300);

ctx.fill();

// for animations
const sleep = ms => new Promise(res => setTimeout(res, ms));

let thex = 100;
let vx = 0;

let they = 100;
let vy = 0;

// main loop
(async () => {
  let lucid = 0;
  // while (lucid < 700){
  //   ctx.clearRect(0,0,window.innerWidth, window.innerHeight);
  //   ctx.strokeRect(100,lucid,100,100);
  //   lucid += 1;
  //   await sleep(); // standard delay
  // }

  while (true){
    ctx.clearRect(0,0,window.innerWidth, window.innerHeight);
    ctx.strokeRect(thex,they,100,100);

    thex += vx;
    vx = vx * 0.99;

    they += vy;
    vy = vy * 0.99;

    if (thex < 0){
      vx = Math.abs(vx)
    }
    if (thex > window.innerWidth){
      vx = -Math.abs(vx)
    }


    if (they < 0){
      vy = Math.abs(vy)
    }
    if (thex > window.innerHeight){
      vy = -Math.abs(vy)
    }

    await sleep(); // standard delay
  }

})();
// ok thats it for the main loop

// keypress processing
(async () => {
  window.addEventListener("keydown", function(event) {
    
    if (event.defaultPrevented) {
      return;
    }

    let actkey = event.code.replace('Key','')
    let filterletters = 'QWERTYUIOPASDFGHJKLZXCVBNM';

    if (actkey == 'ArrowLeft'){
      vx -= 5;
    } else if (actkey == 'ArrowRight'){
      vx += 5;
    }

    if (actkey == 'ArrowUp'){
      vy -= 5;
    } else if (actkey == 'ArrowDown'){
      vy += 5;
    }
    
  }, true);
})();
