class Ground{
    constructor(x,y,width,height){
        var option = {
            isStatic:true
        }

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.body = Bodies.rectangle(x,y,width,height);
        World.add(world,this.body);
        
    }

    display(){
        var groundPos = this.body.position;
        push();
        translate(groundPos.x,groundPos.y);
        rectMode(Center);
        fill(128,128,128);
        rect(0,0,this.width,this.height);
        pop();
    }
}