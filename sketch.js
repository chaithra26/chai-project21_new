var canvas;
var music;
var box;
var surface1,surface2,surface3,surface4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){

   canvas = createCanvas(800,600);

   surface1=createSprite(0,580,360,30);
   surface1.shapeColor="blue";

   surface2=createSprite(295,580,200,30);
   surface2.shapeColor="orange";

   surface3=createSprite(515,580,200,30);
   surface3.shapeColor="purple";

   surface4=createSprite(740,580,220,30);
   surface4.shapeColor="green"

   box=createSprite(random(20,750),100,40,40);
   box.shapeColor="white";
   box.velocityX=3;
   box.velocityY=4;
}

function draw() {
    background(rgb(169,169,169));

    edges=createEdgeSprites();
    box.bounceOff(edges);

    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor="blue";
        music.play();
    }
    if(surface2.isTouching(box) && box.bounceOff(surface2)){
        box.shapeColor="orange";
        box.velocityX=0;
        box.velocityY=0;
        music.stop();
    }
    if(surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor="purple";
    }
    if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor="green";
    }
    drawSprites();
}
