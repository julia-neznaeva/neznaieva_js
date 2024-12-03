import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Triangle } from "./Triangle";

const triangle = new Triangle("triangle", 5, 10);
const rectangle = new Rectangle("rectangle", 8, 14);
const circle = new Circle("circle", 8);

console.log(triangle.getFigureInfo());

// Output: " Triangle with base 5 and height 10 has an area of 25"

console.log(rectangle.getFigureInfo());

// Output: " Rectangle with width 8 and height 14 has an area of 112"

console.log(circle.getFigureInfo());

// Output: " Circle with radius 8 has an area of 201.06"