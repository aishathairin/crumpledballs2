class Paper
{
    constructor (x,y,radius)
    {
        var options = 
        {
            'isStatic' : false,
            'restitution' : 0.3,
            'friction' : 0.2,
            'density' : 1.2
        }
  
     this.body = Bodies.circle(x,y,this.radius,options);
     this.radius = radius;
     World.add(world,this.body);
     this.image = loadImage("Images/papers.png");
    }
    display()
    {
        var pos = this.body.position;
        push ();
        translate(pos.x , pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.radius);
        pop ();
    }
}
