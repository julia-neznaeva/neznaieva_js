import { IFigure } from "./IFigure";

export class Circle implements IFigure {
  type: string;
  radius: number;

  constructor(type:string, radius: number) {
    this.type = type;
    this.radius = radius;
  }

  getFigureInfo() {
    return `Circle with radius ${this.radius} has an area of ${(Math.pow(this.radius,2)*Math.PI).toFixed(2)}`;
  }
}
