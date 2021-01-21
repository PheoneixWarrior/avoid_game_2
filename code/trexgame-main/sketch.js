var gamestate = 1
//23 b vertical
//14 b horizontal
//8 r vertical
//11 r horizontal
var score = 0
function preload(){
}

function setup() {
  createCanvas(700,700);
player = createSprite(400, 200, 10, 10);
player.shapeColor = "violet"

b1 = createSprite(350, 175, 50, 10);
b1.shapeColor = "black"
b1.velocityX = 0.5

b2 = createSprite(350, 620, 92, 10);
b2.shapeColor = "black"
b2.velocityX = 0.8


b3 = createSprite(160, 450, 10, 22);
b3.shapeColor = "black"
b3.velocityX = 0.5


b4 = createSprite(160, 200, 10, 40);
b4.shapeColor = "black"
b4.velocityX = 1


b5 = createSprite(540, 215, 10, 75);
b5.shapeColor = "red"
b5.velocityX = 0.9

b6 = createSprite(540, 400, 10, 37);
b6.shapeColor = "black"
b6.velocityX = 0.5

b7 = createSprite(540, 560, 10, 20);
b7.shapeColor = "red"
b7.velocityX = 2

b8 = createSprite(500, 570, 75, 10);
b8.shapeColor = "black"
b8.velocityX = 0.5

b9 = createSprite(350, 175, 45, 10);
b9.shapeColor = "black"
b9.velocityX = 0.5

b10 = createSprite(350, 620, 60, 10);
b10.shapeColor = "black"
b10.velocityX = 0.8


b11 = createSprite(650, 450, 10, 82);
b11.shapeColor = "black"
b11.velocityX = 0.5


b12 = createSprite(160, 200, 10, 40);
b12.shapeColor = "black"
b12.velocityX = 1


b13 = createSprite(540, 62, 10, 75);
b13.shapeColor = "red"
b13.velocityX = 0.9

b14 = createSprite(700, 400, 10, 75);
b14.shapeColor = "black"
b14.velocityX = 0.5

b15 = createSprite(540, 300, 10, 20);
b15.shapeColor = "red"
b15.velocityX = 2

b16 = createSprite(500, 570, 75, 10);
b16.shapeColor = "black"
b16.velocityX = 0.5



border1 = createSprite(0, 350, 10, 700);
border1.shapeColor = "green"

border2 = createSprite(700, 350, 10, 700);
border2.shapeColor = "green"

border3 = createSprite(350, 0, 700, 10);
border3.shapeColor = "green"

border4 = createSprite(350, 700, 700, 10);
border4.shapeColor = "green"







}

function draw() {
  background("lavender"); 
  fill("black")
  textSize(30)
  text(score,350,30)

   b1.bounceOff(border1)
  b1.bounceOff(border2)
  b1.bounceOff(border3)
  b1.bounceOff(border4)
  b1.bounceOff(b2)
  b1.bounceOff(b3)
  b1.bounceOff(b4)
  b1.bounceOff(b5)
  b1.bounceOff(b6)
  b1.bounceOff(b7)
  b1.bounceOff(b8)
  b1.bounceOff(b9)
  b1.bounceOff(b10)
  b1.bounceOff(b11)
  b1.bounceOff(b12)
  b1.bounceOff(b13)
  b1.bounceOff(b14)
  b1.bounceOff(b15)
  b1.bounceOff(b16)



  b2.bounceOff(border1)
  b2.bounceOff(border2)
  b2.bounceOff(border3)
  b2.bounceOff(border4)
  b2.bounceOff(b3)
  b2.bounceOff(b4)
  b2.bounceOff(b5)
  b2.bounceOff(b6)
  b2.bounceOff(b7)
  b2.bounceOff(b8)
  b2.bounceOff(b9)
  b2.bounceOff(b10)
  b2.bounceOff(b11)
  b2.bounceOff(b12)
  b2.bounceOff(b13)
  b2.bounceOff(b14)
  b2.bounceOff(b15)
  b2.bounceOff(b16)
  
  b3.bounceOff(border1)
  b3.bounceOff(border2)
  b3.bounceOff(border3)
  b3.bounceOff(border4)
  b3.bounceOff(b4)
  b3.bounceOff(b5)
  b3.bounceOff(b6)
  b3.bounceOff(b7)
  b3.bounceOff(b8)
  b3.bounceOff(b9)
  b3.bounceOff(b10)
  b3.bounceOff(b11)
  b3.bounceOff(b12)
  b3.bounceOff(b13)
  b3.bounceOff(b14)
  b3.bounceOff(b15)
  b3.bounceOff(b16)

  b4.bounceOff(border1)
  b4.bounceOff(border2)
  b4.bounceOff(border3)
  b4.bounceOff(border4)
  b4.bounceOff(b5)
  b4.bounceOff(b6)
  b4.bounceOff(b7)
  b4.bounceOff(b8)
  b4.bounceOff(b9)
  b4.bounceOff(b10)
  b4.bounceOff(b11)
  b4.bounceOff(b12)
  b4.bounceOff(b13)
  b4.bounceOff(b14)
  b4.bounceOff(b15)
  b4.bounceOff(b16)

  b5.bounceOff(border1)
  b5.bounceOff(border2)
  b5.bounceOff(border3)
  b5.bounceOff(border4)
  b5.bounceOff(b6)
  b5.bounceOff(b7)
  b5.bounceOff(b8)
  b5.bounceOff(b9)
  b5.bounceOff(b10)
  b5.bounceOff(b11)
  b5.bounceOff(b12)
  b5.bounceOff(b13)
  b5.bounceOff(b14)
  b5.bounceOff(b15)
  b5.bounceOff(b16)

  b6.bounceOff(border1)
  b6.bounceOff(border2)
  b6.bounceOff(border3)
  b6.bounceOff(border4)
  b6.bounceOff(b7)
  b6.bounceOff(b8)
  b6.bounceOff(b9)
  b6.bounceOff(b10)
  b6.bounceOff(b11)
  b6.bounceOff(b12)
  b6.bounceOff(b13)
  b6.bounceOff(b14)
  b6.bounceOff(b15)
  b6.bounceOff(b16)
  
  b7.bounceOff(border1)
  b7.bounceOff(border2)
  b7.bounceOff(border3)
  b7.bounceOff(border4)
  b7.bounceOff(b8)
  b7.bounceOff(b9)
  b7.bounceOff(b10)
  b7.bounceOff(b11)
  b7.bounceOff(b12)
  b7.bounceOff(b13)
  b7.bounceOff(b14)
  b7.bounceOff(b15)
  b7.bounceOff(b16)

  b8.bounceOff(border1)
  b8.bounceOff(border2)
  b8.bounceOff(border3)
  b8.bounceOff(border4)
  b8.bounceOff(b9)
  b8.bounceOff(b10)
  b8.bounceOff(b11)
  b8.bounceOff(b12)
  b8.bounceOff(b13)
  b8.bounceOff(b14)
  b8.bounceOff(b15)
  b8.bounceOff(b16)

  b9.bounceOff(border1)
  b9.bounceOff(border2)
  b9.bounceOff(border3)
  b9.bounceOff(border4)
  b9.bounceOff(b10)
  b9.bounceOff(b11)
  b9.bounceOff(b12)
  b9.bounceOff(b13)
  b9.bounceOff(b14)
  b9.bounceOff(b15)
  b9.bounceOff(b16)

  b10.bounceOff(border1)
  b10.bounceOff(border2)
  b10.bounceOff(border3)
  b10.bounceOff(border4)
  b10.bounceOff(b11)
  b10.bounceOff(b12)
  b10.bounceOff(b13)
  b10.bounceOff(b14)
  b10.bounceOff(b15)
  b10.bounceOff(b16)
  
  b11.bounceOff(border1)
  b11.bounceOff(border2)
  b11.bounceOff(border3)
  b11.bounceOff(border4)
  b11.bounceOff(b12)
  b11.bounceOff(b13)
  b11.bounceOff(b14)
  b11.bounceOff(b15)
  b11.bounceOff(b16)

  b12.bounceOff(border1)
  b12.bounceOff(border2)
  b12.bounceOff(border3)
  b12.bounceOff(border4)
  b12.bounceOff(b13)
  b12.bounceOff(b14)
  b12.bounceOff(b15)
  b12.bounceOff(b16)

  b13.bounceOff(border1)
  b13.bounceOff(border2)
  b13.bounceOff(border3)
  b13.bounceOff(border4)
  b13.bounceOff(b14)
  b13.bounceOff(b15)
  b13.bounceOff(b16)

  b14.bounceOff(border1)
  b14.bounceOff(border2)
  b14.bounceOff(border3)
  b14.bounceOff(border4)
  b14.bounceOff(b15)
  b14.bounceOff(b16)
  
  b16.bounceOff(border1)
  b16.bounceOff(border2)
  b16.bounceOff(border3)
  b16.bounceOff(border4)
  b16.bounceOff(b15)


  b15.bounceOff(border1)
  b15.bounceOff(border2)
  b15.bounceOff(border3)
  b15.bounceOff(border4)

if(gamestate ===1){
  score = Math.round(frameCount%6000)
  if(keyDown(UP_ARROW)){
    player.y = player.y-5
  }
  if(keyDown(DOWN_ARROW)){
    player.y = player.y+5
  }

  if(keyDown(RIGHT_ARROW)){
    player.x = player.x+5
  }
  if(keyDown(LEFT_ARROW)){
    player.x = player.x-5
  }

  player.collide(b1)
  player.collide(b2)
  player.collide(b3)
  player.collide(b4)
  player.collide(b6)
  player.collide(b8)
  player.collide(b9)
  player.collide(b10)
  player.collide(b11)
  player.collide(b12)
  player.collide(b14)
  player.collide(b16)



  if(player.isTouching(b5)||player.isTouching(b15)||player.isTouching(b13)||player.isTouching(b7)){
  player.destroy();
  b1.velocityX = 0
  b2.velocityX = 0
  b3.velocityX = 0
  b4.velocityX = 0
  b5.velocityX = 0
  b6.velocityX = 0
  b7.velocityX = 0
  b8.velocityX = 0
  b9.velocityX = 0
  b10.velocityX = 0
  b11.velocityX = 0
  b12.velocityX = 0
  b13.velocityX = 0
  b14.velocityX = 0
  b15.velocityX = 0
  b16.velocityX = 0
  gamestate = 2
  }
}
  if(gamestate ===2){
  fill("green")
  textSize(30)
  text("GAME OVER", 350, 350)
  }





  

  drawSprites();
 
}