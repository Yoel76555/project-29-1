var ground;
var block8,block9,block10,block11,block12,block14,block15,block16;


function setup() {
  createCanvas(800,400);


  //leave two
  block8 = new Box(330,235,30,40);
  block9 = new Box(360,235,30,40);
  block10 = new Box(390,235,30,40);
  block11 = new Box(420,235,30,40);
  block12 = new Box(450,235,30,40);

  //level three
  block13= new Box(360,195,30,40);
  block14 = new Box(390,195,30,40);
  block15 = new Box(420,195,30,40);

  //top block
  block16 = new Box(390,155,30,40);
  
  ground = new Ground(400,200,1200,20);

}

function draw() {
  background(255,255,255);  

  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  ground.display();
  drawSprites();
}