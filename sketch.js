const Engine=Matter.Engine
const World=Matter.World
const Body=Matter.Body
const Bodies=Matter.Bodies
 var engine,world,ball,ground
function setup(){
createCanvas(400,400)
engine=Engine.create()
world=engine.world
ball=Bodies.circle(100,10,20,{restitution:0.95,frictionAir:0.01})
ground=Bodies.rectangle(100,400,400,20,{isStatic:true})
World.add(world,ball)
World.add(world,ground)
}

function draw(){
background("black")
Engine.update(engine)
ellipse(ball.position.x,ball.position.y,20)
rect(ground.position.x,ground.position.y,400,20)
}
