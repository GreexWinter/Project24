class Paper{
    constructor(x,y,radius){
        var options = {
            'isStatic' : false,
            'restitution' : 0.3,
            'friction' : 0.5,
            'density' : 0.8
        }
        this.body = Bodies.circle(x,y,(radius-20)/2,options);
        this.radius = radius;
        World.add(world, this.body);
    }
    display(){
        var position = this.body.position;
        var angle = this.body.angle;

        push();
        translate(position.x, position.y);
        rotate(angle);
        //ellipseMode(RADIUS);
        rectMode(CENTER);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}