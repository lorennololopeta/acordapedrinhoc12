var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  boyImg = loadImage ("Runner-1.png" , "Runner-2.png") 
  pathImg = loadAnimation ("path.png") 
 
}

function setup(){
  
  createCanvas(400,400);
 path = createSprite(200,200); 
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

boy = createSprite(180,340,30,30);
boy.addAnimation("jakeRunning" , boyImg);
boy.scale=0.08;
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
//defina visibilidade como falsa para o limite à esquerda
leftBoundary.visible = false
//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
//defina visibilidade como falsa para o limite à direita
rightBoundary.visible = false
}

function draw() {
  background(blue);
  path.velocityY = 4;
  
  // mover o menino com o mouse usando mouseX
  boy.x = Word.mouseX
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  boy.collide(rightBoundary);
  boy.collide(leftBoundary);
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
