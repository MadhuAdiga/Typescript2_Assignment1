export {Triangle}; // export the 3 classes to Main.ts
export {Square};
export {Shapes};

class Shapes { // define a class Shapes which takes in a side property of type number
    constructor(public sides:number){
    console.log("You have given me " + this.sides + " sides"); // prints the number of sides taken
}
}

class Triangle extends Shapes{ // define a Triangle class extending Shapes which has a method which logs that the new instance created is a triangle
    printTriangle(){
        console.log("I must be a triangle");
    }
}

class Square extends Shapes{ // define a Square class extending Shapes which has a method which logs that the new instance created is a square
    printSquare(){
        console.log("I am probably a square");
    }
}
