var man, manI;
var coin, coinI;
var obs1, obs1I;
var obs2I;
var obs3I;
var bk, bkI;
var gameOver,gameOverI;
var reset, resetI;
var invisible;

function preload(){
  manI = loadAnimation("running8.png","running7.png","running6.png","running5.png","running4.png","running3.png","running2.png","running1.png");
  
  bkI = loadImage("bk1.jpg");

  obs1I = loadImage("rock.png");
  obs2I = loadImage("cactus.png");
  obs3I = loadImage("fence.png");

  coinI = loadImage("coin.png");
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  
  bk = createSprite(width+3200,height/2-150);
  bk.addImage(bkI);
  bk.scale=1.3;
  bk.velocityX=-10;
  
  man = createSprite(0+150,height/2+200);
  man.scale=0.15;
  man.addAnimation("moving",manI);
  
  invisible = createSprite(man.x,man.y+100,width,10);
}

function draw(){
  background("white");
  
  if(bk.x<-2000){
    bk.x=width+3200;
  }

  if(touches.length>0||keyDown("space")&&man.y>490.5){
  man.velocityY=-15;
  touches = [];
 }
  man.velocityY=man.velocityY+0.5;
 
  man.collide(invisible);

  obstacles();
  coins();
  drawSprites();
  console.log();
}

function obstacles(){
  if(frameCount%100===0){
   obs1 = createSprite(width+50,height/2+200);
   obs1.scale=0.9;
   obs1.velocityX=-10;
   obs1.lifetime=150;

   rand = Math.round(random(1,3));

   if(rand==1){
     obs1.addImage(obs1I);
     obs1.scale=2;
     obs1.y=height/2+150;
   }
   else if(rand==2){
    obs1.addImage(obs3I);
    obs1.scale=1.3;
   }
   else if(rand==3){
    obs1.addImage(obs2I);
   }
  }
}

function coins(){
  if(frameCount%60===0){
  coin = createSprite(width+50,height/2);
  coin.addImage(coinI);
  coin.scale=0.7;
  coin.velocityX=-10;

  coin.lifetime=150;
 }
}


