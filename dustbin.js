class Dustbin{

    constructor(x,y,height,angle){

        var option={
            isStatic:true
        }

        this.width=20;
        this.height=height;
        
        this.body=Bodies.rectangle(x,y,20,height,option);
        World.add(world,this.body);
        Matter.Body.setAngle(this.body,angle);
        this.image=loadImage("dustbingreen.png")
    }

    display(){
        var pos=this.body.position;
        
        push()
			translate(pos.x, pos.y);
            rectMode(CENTER)
            //imageMode(CENTER)
			//strokeWeight(4);
			stroke(255)
            angleMode(RADIANS)
            rotate(this.body.angle)
			fill(255)
            rect(0,0,this.width, this.height);
           // image(this.image,0,-30,2,180);
			pop()
    }

}