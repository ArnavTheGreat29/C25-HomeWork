class Dustbin{

    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }

        this.width = width;
        this.height = height;
        this.dustbin = Bodies.rectangle(x,y,this.width,this.height,options)
        this.image = loadImage("dustbingreen.png")
       
        World.add(world, this.dustbin)
    }

    display(){
       
        var pos =this.dustbin.position;
        imageMode(CENTER);
        //rect(pos.x, pos.y, this.width, this.height)
        image(this.image,pos.x, pos.y-50,this.width,this.height + 100)

    }


}