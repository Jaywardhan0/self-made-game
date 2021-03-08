var Player;
var zombie;
var Zombiegroup;
var zombie2group;
var zombie3group;
var zombie4group;
var good;
var goodZombie1;
var goodZombie2;
var bad;
var bad1;
var PLAY = 1
var END = 0
var play;
var gameState = PLAY;
function preload(){
good = loadImage("Good.png")
goodZombie1 = loadImage("Good1.png")
goodZombie2 = loadImage("Good2.png")
bad = loadImage("Bad.png")
bad1 = loadImage("bad1.png")

}
function setup(){
    createCanvas(500,500)
    play= createSprite(250,50,30,10)
    Player= createSprite(250,250,20,20)
    Player.addImage(good)
    Player.scale = 0.12
    Player.shapeColor = "Red"    
    Zombiegroup = createGroup()
    zombie2group = createGroup()
    zombie3group = createGroup()
    zombie4group = createGroup()
}
function draw(){
    background("Purple")
    fill("Black")
    drawSprites();
    Player.x = mouseX
    Player.y = mouseY
    console.log(gameState);
    if (gameState=== PLAY){
        if (keyDown("space")){
            zombie();
            Enemy();
            Enemy2();
            Enemy3();
            text("For better experience don't longpress spacebar",100,0)
            touches = [];

    }
          
        if(mousePressedOver(play)||touches.length > 0){
            zombie();
            Enemy();
            Enemy2();
            Enemy3();
            text("For better experience don't longpress spacebar",100,0)
    }
    if (Zombiegroup.isTouching(Player)){
        gameState= END
        
    }
    if(Player.isTouching(zombie2group)){
        zombie2group.destroyEach();
    }
    if(zombie3group.isTouching(Player)){
        gameState= END
    }
    if(Player.isTouching(zombie4group)){
        zombie4group.destroyEach();
    }
}
if (gameState === END){
    textSize(20)
    fill("Black")
    text("You lose",220,250)
   }
}
function zombie(){
   var position = Math.round(random(1,2))
   var zombie1=createSprite(20,250,20,20)
   zombie1.addImage(bad)
   zombie1.scale = 0.12
    //zombie.y= zombie.y+2
    //zombie.x= zombie.x+2
    zombie1.velocity.y = 0
    zombie1.shapeColor="Yellow"
    console.log(position) 
    if(position===1)
    {
    zombie1.x=400;
    zombie1.velocity.x = -3
    }
      if(position===2){
      zombie1.x=0;
      zombie1.velocity.x =3
      }  
      Zombiegroup.add(zombie1)
} 
function Enemy(){
    var position = random(1,2)
    var zombie2= createSprite(480,250,20,20)
    zombie2.addImage(goodZombie1)
    zombie2.scale = 0.12
    zombie2.shapeColor="Green"
    zombie2.velocity.y = 0
    zombie2.velocity.x = -3
    console.log(zombie2)
    zombie2group.add(zombie2)
    if(position===1)
    {
    zombie2.x=400;
    zombie2.velocity.x = -3
    }
      if(position===2){
      zombie2.x=0;
      zombie2.velocity.x =3
      }  
}
function Enemy2(){
    var position = random(1,2)
    var zombie3= createSprite(250,480,20,20)
    zombie3.addImage(bad1)
    zombie3.scale = 0.12
    zombie3.shapeColor= "Orange"
    zombie3.velocity.y = -3
    zombie3.velocity.x = 0
    console.log(zombie3)
    zombie3group.add(zombie3)
    
}
function Enemy3(){
    var position = random(1,2)
    var zombie4= createSprite(250,20,20,20)
    zombie4.addImage(goodZombie2)
    zombie4.scale = 0.12
    zombie4.shapeColor = "Blue"
    zombie4.velocity.y = 3
    zombie4.velocity.x = 0
    console.log(zombie4)
    zombie4group.add(zombie4)
    if(position===1)
    {
    zombie4.x=400;
    zombie4.velocity.x = -3
    }
      if(position===2){
      zombie4.x=0;
      zombie4.velocity.x =3
      }  
}