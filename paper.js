class Paper
{
	constructor(x,y,r)
	{
		var options=
        {
            restitution:0.3,
            friction:0,
            density:1.2,

        }
		this.x=x;
		this.y=y;
		this.r=r;
		this.body=Bodies.circle(x, y, r/2 , options);
        this.image=loadImage("paper.png");
 		World.add(world, this.body);

	}
	display()
	{
			
			var pos = this.body.position;

            var angle = this.body.angle;
            push()
            translate(pos.x, pos.y);
            rotate(angle);
            imageMode(CENTER);
            image(this.image, 0, 0, 60,60);
            pop();
			
	}
}