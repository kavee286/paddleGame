class Phones {

    constructor(){
         
        this.xPosition =10;
        this.yPosition = 10;
        this.height = 10;
        this.width = 100;
        this.radius = 20;
        this.name = "phone";

    }

    displayPhone(){
        rect(this.xPosition, this.yPosition, this.height, this.width);
    }

    displayAlexa(){
      circle(this.xPosition, this.yPosition, this.radius);
    }
}

