 let ctx = canvas.getContext('2d');
    let bg = new Image();
    bg.src = 'game_bg.jpg';

    let ball1 = new Image();
    let pad = new Image();
    let block = new Image();
    let blocks = [];
    let ballImg = [ball1];
    let balls = [];
    let pads = [];

    let ballobj = {
            x: 0,
            y: 0,
            w:50,
            h:50,
            dx: 10,
            dy: 10,
            img: 0
        }

    let padobj = {
            x: 0,
            y: 0,
            w:102,
            h:22,
            dx: 10,
            dy: 600,
        }





    bg.onload = function () {
        ctx.drawImage(bg, 0, 0);
        ball1.src = 'ball1.png';
        pad.src = 'paddle.png';
        block.src = 'block.png';
        
        
    }

    function refresh() { //fps楨數  將畫面重新繪製
        // 背景固定
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(bg, 0, 0);
        // ctx.drawImage(pad,0,600);
        

        for (let j=0;j<6;j++){
            for (var i = 0; i < 13; i++) {
            ctx.drawImage(block,block.x+ i*70 +30,block.y+j*50+50);
            }
        }
        

        for (let i = 0; i < balls.length; i++) {
            ctx.drawImage(ballImg[balls[i].img], balls[i].x, balls[i].y);
        }

        for (let i = 0; i < pads.length; i++) {
            ctx.drawImage(pad, pads[i].x, pads[i].y);
        }


    }


    function go() {
            for (let i = 0; i < balls.length; i++) {
            moveball(balls[i]);
        }

        
    }

    function moveball(obj) {
        if (obj.x < 0 || obj.x + 50 > canvas.width) {
            obj.dx *= -1;
        }

        if (obj.y < 0 || obj.y + 50 > canvas.height) {
            obj.dy *= -1;
        }

        // // 小球碰撞挡板检测
        // if (collide(obj)) {
        //   // 当小球运动方向趋向挡板中心时，Y轴速度取反，反之则不变
        //   if (Math.abs(obj.y + obj.x/2 - padobject.y + padobject.x/2) > Math.abs(obj.y + obj.x +  obj.dy - padobject.y + padobject.x/2)) {
        //      obj.dy *= -1;
        //   } else {
        //      obj.dy *= 1;
        //   }
            
        // }

         
        obj.x += obj.dx;
        obj.y += obj.dy;

}

    canvas.onmousedown = function (e) {
        let ballobject = clone(ballobj);// 複製物件api
        ballobject.x = e.offsetX -25;
        ballobject.y = e.offsetY -25;
        ballobject.img = parseInt(Math.random()*1);

        balls[0] = ballobject; 

    }

    canvas.onmousemove = function (e) {
        let padobject = clone(padobj);

        padobject.x = e.offsetX;

        if (padobject.x >= 960 - padobject.w) { // 到右边界时
          padobject.x -= 102; 
        } 
        
        padobject.y = 600;

        pads[0] = padobject;

    }
  
  // 小球、挡板碰撞检测
  function collide (ball) {
    let b = ball;
    let p = this;
    if (Math.abs((b.x + b.w/2) - (p.x + p.w/2)) < (b.w + p.w)/2 &&
        Math.abs((b.y + b.h/2) - (p.y + p.h/2)) < (b.h + p.h)/2) {
      return true;
    }
    return false;
  }

  function collideRange (ball) {
    let b = ball;
    let p = this;
    let rangeX = 0;
    rangeX = (p.x + p.w/2) - (b.x + b.w/2);
    if (rangeX < 0) { // 小球撞击挡板左侧
      return rangeX / (b.w/2 + p.w/2) ;
    } else if (rangeX > 0) { // 小球撞击挡板右侧
      return rangeX / (b.w/2 + p.w/2) ;
    }
  }


    setInterval(refresh, 30);
    setInterval(go, 50);



