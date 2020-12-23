var gameobject2, gameobject1;

function setup() {
  createCanvas(1200,800);
gameobject2 = createSprite(400, 100, 50, 80);
gameobject2.shapeColor = "green";
gameobject2.debug = true;
gameobject1 = createSprite(400, 800,80,30);
gameobject1.shapeColor = "green";
gameobject1.debug = true;

gameobject1.velocityY = -5;
gameobject2.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  bounceOff(gameobject1,gameobject2);

  drawSprites();
}
