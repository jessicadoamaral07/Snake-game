var snake,fundo,fundoIMG,snakeimg; 
function preload(){ 
  fundoIMG = loadImage("fundo.png");
  snakeimg = loadImage("cobra.png"); 
} 
function setup() { 
  createCanvas(350, 350); 
  fundo = createSprite(175,175,350,350); 
  fundo.addImage(fundoIMG); 
  snake = createSprite(150,150,20,20);
  snake.addImage(snakeimg); 
  snake.scale = 0.05;
} 
function draw() { 
  background(220);
  if (keyDown("up")){
    snake.velocityY = -5;
  }
  drawSprites();
}