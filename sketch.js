var wall,thickness;
var bullet,speed,weight;

function setup() {
  
  createCanvas(1600,400);

  bullet = createSprite(50, 200, 50, 10);
  wall = createSprite(1200,200,thickness,height/2);

  speed = random(223,321);
  weight = random (30.52);
  thickness = random (22,83);
}

function draw() {
  background(0,0,0);

  text("x:"+mouseX,50,50);
  text("y:"+mouseY,50,75);

  bullet.velocityX = speed;
  
 
  fill("pink"); 
  textSize(19); 
  text("Damage:"+Math.round(0.5*weight*speed*speed/thickness*thickness*thickness),1150,350);

  fill("Green"); 
  textSize(19);
  text("Damage <= 10 Then wall is effective against thee bullet",350,292);

  fill("Red"); 
  textSize(19);
  text("Damage >=10,The wall is not effective against the bullet",350,315);

  if(bullet.isTouching(wall)){
    bullet.velocityX = 0;
  }
   
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    //var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10){
      wall.shapeColor = color(255,0,0);
    }
    if(damage<10){
      wall.shapeColor = color(0,255,0);
    }
  }

  drawSprites();
}


function hasCollided(bullet,wall){
  bulletRightEdge=bullet.x + bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}