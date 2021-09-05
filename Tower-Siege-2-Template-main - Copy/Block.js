class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.visiblity=255
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image= loadImage("block.png");
      World.add(world, this.body);
    }
    display(){
      var pos= this.body.position;
      //rectMode(CENTER);
      //rect(pos.x,pos.y,this.width, this.height);
      
      if(this.body.speed>3){
        World.remove(world,this.body);
         //World.remove(world,this.image);
         push();
         this.visiblity=this.visiblity-5;
         tint(255,this.visiblity);
         image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
         //World.remove(world,this.body);
         //World.remove(world,this.image);
         pop();
      }else{
        image(this.image,this.body.position.x,this.body.position.y);
      }
         
       
    }
}