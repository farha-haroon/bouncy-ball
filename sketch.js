const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var platform1;
var platform2;
var platform3;
var platform4
var ball;
var basket, basketImg;
var balls = [];

function preload() {
  
    basketImg = loadImage("unnamed.png");


}

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    platform1 = new Platform(50,100,300,PI+30);
    platform2 = new Platform(250,250,300,PI+30);
    platform3 = new Platform(450,400,300,PI+18);
    platform4 = new Platform(650,550,300,PI+30);

    basket = new Basket(1000, 780);

    console.log(ball);
}

function draw(){
    background("lightgrey");

    Engine.update(engine);
    
    platform1.display();
    platform2.display();
    platform3.display();
    platform4.display();
    basket.display();

    for(var i = 0; i<balls.length; i++){
        balls[i].display();
    }
   
}

function keyPressed(){
    if(keyCode === 32){    
       var ball = new Ball(0,0,20,20);
       ball.display();
       balls.push(ball);
       console.log(balls);
  }
    
}   

