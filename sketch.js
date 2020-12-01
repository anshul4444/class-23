const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var box1,box2,box3,box4,box5;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);


    box1 = Bodies.rectangle(100,200,50,50);
    World.add(world,box1);
    
    box2 = Bodies.rectangle(150,200,50,50)
    World.add(world,box2)

    box3 = Bodies.rectangle(200,200,50,50)
    World.add(world,box3)
    
    box4 = Bodies.rectangle(250,200,50,50)
    World.add(world,box4)

    box5 = Bodies.rectangle(300,200,50,50)
    World.add(world,box5)
    }

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    fill("green")
    rect(box1.position.x,box1.position.y,50,50);
    rect(box2.position.x,box2.position.y,50,50);
    rect(box3.position.x,box3.position.y,50,50)
    rect(box4.position.x,box4.position.y,50,50)
    rect(box5.position.x,box5.position.y,50,50)
}