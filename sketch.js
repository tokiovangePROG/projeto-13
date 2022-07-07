var garden,rabbit;
var gardenImg,rabbitImg;
var checkObjects;
var apple, orangeLeaf,redLeaf;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  createCanvas(400,400);
  checkObjects = createSprite(200,200,400,400);

garden=createSprite(200,200);
garden.addImage(gardenImg);

rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX;
  drawSprites();
  console.log(frameCount);
 
  createOrange();
  createApples();
  createRed();
}

function createApples(){
  if(frameCount % 60 == 0){
  apple = createSprite(random(50, 350),-40,10,10);
  apple.addImage(appleImg);
  apple.scale = 0.07;
  apple.velocityY = 3;
  apple.lifetime = 180;}
}
function createOrange() {
  if(frameCount % 90 == 0){
  orangeLeaf = createSprite(random(50, 350),-40,10,10);
  orangeLeaf.addImage(orangeImg);
  orangeLeaf.scale = 0.07;
  orangeLeaf.velocityY = 5;
  orangeLeaf.lifetime = 100;}
}
function createRed(){
  if(frameCount % 100 == 0){
  redLeaf = createSprite(random(50, 350),-40,10,10);
  redLeaf.addImage(redImg);
  redLeaf.scale = 0.07;
  redLeaf.velocityY = 10;
  redLeaf.lifetime = 50;}
}