import { IDimensions } from "./IDimensions";

export class Dimentions implements IDimensions {
  length: number;
  width: number;
  height: number;

  constructor(length: number, width: number, height: number) {
    this.length = length;
    this.width = width;
    this.height = height;
  }
}
