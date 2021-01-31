class Paper {
   constructor(){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.5
        }
        this.body=Bodies.circle(200,200,50);
    } 
}