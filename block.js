class box{

    constructor(x, y, width, height){

        var option = {
            isStatic:true
        }

        this.body = Bodies.rectangle(x, y, width, height, option);

        this.width = width;
        this.height = height;

        World.add(world, this.body);

    }
    display(){

        var pos = this.body.position;
        var angle = this.body.angle;

        push();

        translate(pos.x, pos.y);
        rotate(angle);


        rectMode(CENTER);
        fill("red");
        rect(10, 10, this.width, this.height);
        pop();


    }
}