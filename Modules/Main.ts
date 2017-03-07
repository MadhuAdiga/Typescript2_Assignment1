import {Triangle} from "./shapes"; // Import all three classes defined in the shapes.ts module
import {Square} from "./shapes";
import {Shapes} from "./shapes";


let myTriangle = new Triangle(3); // Create a new object myTriangle of the Triangle type
myTriangle.printTriangle(); //Invoke the printTriangle method on the new object

let mySquare = new Square(4);  // Create a new object mySquare of the Square type
mySquare.printSquare(); //Invoke the printSquare method on the new object