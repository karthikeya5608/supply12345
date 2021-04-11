var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 550);
	

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
  
}


function draw() {
  background(0);
  packageSprite.debug=true;
  packageSprite.collide(groundSprite);
  if (keyDown(DOWN_ARROW)) {
	packageSprite.velocityY=5;
   }
 
  drawSprites();
 
}



