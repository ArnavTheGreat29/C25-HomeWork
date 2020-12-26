class Paper {
    constructor(x, y) {
      var options = {

          isStatic: false,
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
      this.paper = Bodies.circle(x, y, 30, options);
     
      this.image = loadImage("paper.png")
      
      World.add(world, this.paper);
      
    }
    display(){
      var pos =this.paper.position;
      imageMode(CENTER);
      
     
      //circle(pos.x, pos.y,60);
      image(this.image,pos.x, pos.y,60,60)
      
      
    }
  };
  