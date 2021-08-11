class Ball{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction': 1,
            'density':1,
            'velocity':{x:5, y:4}
        }
        this.body = Bodies.rectangle(x, y, width, height,options);
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        this.width = width;
        this.height = height;
        console.log(this.body);
        Matter.Body.setVelocity(this.body,{x:7, y:0}); 
        World.add(world, this.body);
        
      }


      display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill(this.color);
        ellipse(0,0,this.width,this.height);
        pop();
      }
}