class paper
{
	constructor(x,y,radius)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		this.r=radius;
		this.body=Bodies.circle(x, y, radius, options)
		World.add(world, this.body);
		this.image=loadImage("paper.png")

	}
	display()
	{
			
			var pos=this.body.position;		

			
			
			//ellipseMode(RADIUS)
			imageMode(CENTER)
			strokeWeight(3);
			fill(255,0,255)
			//ellipse(pos.x,pos.y,this.r);
			image(this.image,pos.x,pos.y,this.r+50,this.r+50)
			
			
	}

}