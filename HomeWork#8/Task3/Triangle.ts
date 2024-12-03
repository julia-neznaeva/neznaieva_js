import { IFigure } from "./IFigure";

export class Triangle implements IFigure {
  type: string;
  base: number;
  height: number;

  constructor(type: string, base: number, height: number) {
    this.type = type;
    this.base = base;
    this.height = height;
  }

  getFigureInfo() {
    return `Triangle with base ${this.base} and height ${this.height} has an area of ${(this.base * this.height) / 2}`;
  }
}
