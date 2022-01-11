var mar, nave_moviendose, marimagen, nave, barrera_invisible, barra_invisible;

function preload(){
marimagen = loadImage("sea.png");
nave_moviendose = loadAnimation("ship-3.png","ship-4.png");

}

function setup(){
  createCanvas(400,400);
 mar = createSprite(200,200,50,50);
  mar.addImage("mar",marimagen);
  mar.scale = 0.3;

nave = createSprite(250,310,200,30);
nave.addAnimation("nave",nave_moviendose);
nave.scale = 0.2;
nave.velocityY = -4;

barrera_invisible = createSprite(200,120,400,10);
barrera_invisible.visible = false;
 
barra_invisible = createSprite(200,400,400,10);
barra_invisible.visible = false;
}

function draw() {
  background("blue");
 

nave.bounceOff(barrera_invisible);
nave.bounceOff(barra_invisible);

 drawSprites(); 
}
