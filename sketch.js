var backgroundImage,background;
var mouse,mouseImg1,mouseImg2,mouseImg3;
var cat,catImg1,catImg2,catImg3;

function preload() {
    //load the images here
    backgroundImage=loadImage("images/garden.png");
    catImg1=loadImage("images/cat1.png");
    catImg2=loadAnimation("images/cat2.png","images/cat3.png");
    catImg3=loadImage("images/cat4.png");
    mouseImg1=loadImage("images/mouse1.png");
    mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg4=loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
mouse=createSprite(100,700);
mouse.addAnimation("mouseCheese",mouseImg1);
mouse.scale=0.1;
cat=createSprite(500,700);
cat.addAnimation("catSitting",catImg1);
cat.scale=0.1;
}

function draw() {

    background(backgroundImage);
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x>cat.width/2+mouse.width/2){
    cat.velocityX=0;
    cat.addAnimation("catStanding",catImg3);
    cat.changeAnimation("catStanding");
    mouse.addAnimation("mouseMirror"mouseImg3);
    mouse.changeAnimation("mouseMirror");
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    cat.velocityX=-3;
    cat.addAnimation("catMoving",catImg2);
    cat.changeAnimation("catMoving");

    mouse.addAnimation("mouseTeasing",mouseImg2);
    mouse.changeAnimation("mouseTeasing");
}

}
