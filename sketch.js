
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score, ground, Invisibleground, background, backgroundImage;
var survivalTime = 0;    

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  backgroundImage = loadImage("jungle.jpg")
}



function setup() {
  createCanvas(600, 200);
  background = createSprite(0, 20, 600, 200);
  background.addImage(backgroundImage);
  background.scale = 1.5;
 
  
  monkey = createSprite(50,165,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(200,195,600,10);
  ground.x = ground.width /2;
 
  
  Invisibleground = createSprite(200,195,600,10);
  
}


function draw() {
  
   background.velocityX = -6;
  if ( background.x < 0) {
    background.x =  background.width / 2;
  } 
  
  
spawnbanana();
spawnobstacle();
  



  
   if(keyDown("space") && monkey.y >= 150) {
        monkey.velocityY = -14;
   }
  
   monkey.velocityY = monkey.velocityY + 0.8
  
  
  
  monkey.collide(Invisibleground);
  Invisibleground.visible = false;

drawSprites();
  stroke("black");
textSize(20);
fill("black")
survivalTime = Math.ceil(frameCount/frameRate())
text("Survival time: "+ survivalTime, 430,30)
}
function spawnbanana() {
  if (frameCount % 200 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(20,100));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -5;  
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
   
  }
}
function spawnobstacle(){
  if(frameCount % 80 === 0){
  var obstacle = createSprite(600,180,20,10);
  //obstacle.addImage(obstacleImage);  
  //obstacle.scale = 0.1;
  obstacle.velocityX = -6;
  obstacle.lifetime = 200;
 } 
}






