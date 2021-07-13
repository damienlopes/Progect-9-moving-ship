var ship, shipmove;
var sea, seaimg;

function preload(){
shipmove = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")
seaimg = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);

  sea = createSprite (100, 100,20,20)
  sea.addImage("sea", seaimg)
  sea.scale = 0.5 
  
  ship = createSprite (400, 200, 300,50);
  ship.addAnimation("moving", shipmove);
  
  ship.scale = 0.1;
  ship.x = 50
  
  

}

function draw() {
  background("blue");
 drawSprites ()
}