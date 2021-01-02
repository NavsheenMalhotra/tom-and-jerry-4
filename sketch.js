
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tom;
var jerry;
var ground;
var cheeseImg;
var cutejerryImg, jerrycheeseImg;
var jerrycheese2Img;
var tomImg;
var jerryImg;
var gameState=0;
var cheese;
var cutejerry;
var b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20, b21, b22, b23;
function preload()
{
  cheeseImg=loadImage("cheese.png");
  cutejerryImg=loadImage("cutejerry.png");
 jerrycheese2Img=loadImage("jerrycheese2.png");
 tomImg=loadImage("tom2.png");
 jerryImg=loadImage("jerry.jpg")
 
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
  world = engine.world;
  

  
cheese=createSprite(100, 70, 10, 10);
cheese.addImage(cheeseImg);
cheese.scale=0.1;
tom=createSprite(700, 670, 50, 50);
tom.scale=0.1;
tom.addImage(tomImg);
jerry=createSprite(600, 660, 10, 10);
jerry.scale=0.27;
jerry.addImage(jerryImg);
ground=new Ground(600,700,1200,20)
b1=createSprite(420, 25, 740, 10);
b2=createSprite(55, 330, 10, 600 )
b3=createSprite(110, 630, 120, 10)
b4=createSprite(130, 160, 160, 10)
b5=createSprite(210, 130, 10, 70)
b6=createSprite(180, 100, 70, 10)
b7=createSprite(160, 250, 10, 180)
b8=createSprite(250, 340, 180, 10)
b9=createSprite(340, 370, 10, 60)
b10=createSprite(380, 400, 250, 10)
b11=createSprite(510, 380, 10, 50)
b12=createSprite(540, 350, 70, 10)
b13=createSprite(300, 130, 10, 200)
b14=createSprite(330, 230, 210, 10)
b15=createSprite(360, 260, 10, 70)
b16=createSprite(90, 450, 80, 10)
b17=createSprite(130, 480, 10, 70)
b18=createSprite(250, 510, 230, 10)
b19=createSprite(360, 530, 10, 50)
b20=createSprite(310, 550, 100, 10)
b21=createSprite(130, 550, 150, 10)
b22=createSprite(250, 680, 10, 80)
b23=createSprite(285, 640, 80, 10)
b24=createSprite(600, 130, 10, 200);
b25=createSprite(540, 130, 130, 10)
b26=createSprite(400, 170, 10, 70)
b27=createSprite(470, 200, 140, 10)
b28=createSprite(540, 320, 10, 250)
b29=createSprite(792, 187, 10, 330)
b30=createSprite(792, 555, 10, 270)
b31=createSprite(710, 270, 10, 400)
b32=createSprite(680, 250, 60, 10)
b33=createSprite(560, 430, 300, 10)
b34=createSprite(410, 450, 10, 50)
b35=createSprite(440, 470, 60, 10)
b36=createSprite(470, 520, 10, 100)
b37=createSprite(690, 500, 200, 10)
b38=createSprite(590, 510, 10, 130)
b39=createSprite(640, 570, 100, 10)
b40=createSprite(480, 230, 10, 60)
b41=createSprite(400, 650, 10, 80)
b42=createSprite(670, 620, 250, 10)
b43=createSprite(550, 570, 10, 100)
b44=createSprite(530, 520, 50, 10)
b45=createSprite(500, 630, 10, 120)
  



	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background("aqua");
if(gameState===0){
  background("yellow");
text('You need to defend Jerry from both Tom and the walls and reach the cheese. Press Enter key to Start the game. All the Best!', 100, 350)
textSize(100)


}

  
  if(gameState===2){
    text("You Win", 400, 350);
    textSize(1000);
    textColor="black";
    jerry.hide();
    
  }
 
  if(jerry.isTouching(cheese)){
    
    gameState=2;
    
  }
  tom.display()
  
  if(keyCode===13){
    gameState=1;
  }
  if(gameState===1){
    background("white")
    ground.display();
    if(jerry.isTouching(b1||b2||b3||b4||b5||b6||b7||b8||b9||b10)) {
      jerry.x=600;
      jerry.y=660;
      tom.x=700;
          tom.y=670;
        }
        if(jerry.isTouching(b11||b12||b13||b14||b15||b16||b17||b18||b19||b20)) {
      jerry.x=600;
      tom.x=700;
          tom.y=670;
      jerry.y=660;
       }
       if(jerry.isTouching(b21||b22||b23||b24||b25||b26||b27||b28||b29||b30)) {
      jerry.x=600;
      jerry.y=660;
      tom.x=700;
          tom.y=670;
      }
        if(jerry.isTouching(b31||b32||b33||b34||b35||b36||b37||b38||b39||b40)) {
      jerry.x=600;
      jerry.y=660;
      tom.x=700;
          tom.y=670;
      }
        if(jerry.isTouching(b41||b42||b43||b44||b45)) {
      jerry.x=600;
      jerry.y=660;
      tom.x=700;
          tom.y=670;
        }
        if(tom.isTouching(b1||b2||b3||b4||b5||b6||b7||b8||b9||b10)) {
          tom.x=700;
          tom.y=670;
          jerry.x=600;
      jerry.y=660;
            }
            if(tom.isTouching(b11||b12||b13||b14||b15||b16||b17||b18||b19||b20)) {
         tom.x=700;
          tom.y=670;
          jerry.x=600;
      jerry.y=660;
           }
           if(tom.isTouching(b21||b22||b23||b24||b25||b26||b27||b28||b29||b30)) {
            tom.x=700;
            tom.y=670;
            jerry.x=600;
      jerry.y=660;
          }
            if(tom.isTouching(b31||b32||b33||b34||b35||b36||b37||b38||b39||b40)) {
              tom.x=700;
              tom.y=670;
              jerry.x=600;
      jerry.y=660;
          }
            if(tom.isTouching(b41||b42||b43||b44||b45)) {
              tom.x=700;
              tom.y=670;
              jerry.x=600;
      jerry.y=660;
            }
//up arrow
if(keyCode===38){
  jerry.y -=5;
  tom.y-=3;
}
//left arrow
if(keyCode===37){
  jerry.x-=5;
  tom.x-=3;
}
//right arrow
if(keyCode===39){
  jerry.x +=5;
  tom.x+=3;
}
//down arrow
if(keyCode===40){
  jerry.y +=5;
  tom.y+=3;
}

  }
  drawSprites();
 
  

}




