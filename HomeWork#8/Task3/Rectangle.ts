import { IFigure } from "./IFigure";

export class Rectangle implements IFigure {
  type: string;
  width: number;
  height: number;

  constructor(type: string, width: number, height: number) {
    this.type = type;
    this.width = width;
    this.height = height;
  }
  getFigureInfo() {
    return `Rectangle with width ${this.width} and height ${this.height} has an area of ${this.width * this.height}`;
  }
}
