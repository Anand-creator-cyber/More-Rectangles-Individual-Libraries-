var fixedRect, movingRect;
var rect1, rect2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "grey";
  //fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  //movingRect.debug = true;

  rect1 = createSprite(100, 100, 50, 50);
  rect2 = createSprite(200 ,100 ,50 ,50);
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  drawSprites();
  if(IsTouching(movingRect, rect2)){

    movingRect.shapeColor = "maroon";
    rect2.shapeColor = "maroon";

  }
  
  else {

    movingRect.shapeColor = "green";
    rect2.shapeColor = "green";

  }
  
}

