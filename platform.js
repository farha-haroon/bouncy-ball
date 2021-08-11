class Platform{
  constructor(x, y, height, angle) {
      var options = {
          'friction':1.0,
          'density':1.0,
          'isStatic': true
      }
      this.body = Bodies.rectangle(x, y, 30, height, options);
      this.width = 30;
      this.height = height;
      Matter.Body.setAngle(this.body, angle);
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      fill("lightyellow");
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
    }
}