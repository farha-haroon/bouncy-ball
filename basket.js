class Basket{
    constructor(x, y) {
        var options = {
            'friction':1.0,
            'density':1.0,
            'isStatic': true
        }
        this.body = Bodies.rectangle(x, y, 75, 20, options);
        this.width = 75;
        this.height = 20;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("lightyellow");
        imageMode(CENTER);
        image(basketImg, this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
      }
  }