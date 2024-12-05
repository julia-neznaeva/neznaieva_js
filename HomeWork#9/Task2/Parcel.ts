import { IDimensions } from "./IDimensions";
import { IParcel } from "./IParcel";
import { PackageStatus } from "./PackageStatus";

export class Parcel implements IParcel {
  id: number;
  weight: number;
  dimensions: IDimensions;
  description?: string | undefined;
  sender: string | number;
  status: PackageStatus;

  constructor(
    weight: number,
    dimensions: IDimensions,
    sender: string | number,
    status: PackageStatus,
    description?: string | undefined
  ) {
    this.id = new Date().getTime();
    this.weight = weight;
    this.dimensions = dimensions;
    this.description = description;
    this.sender = sender;
    this.status = status;
  }

  deliver(isSuccess: boolean): void {
    this.status = isSuccess ? PackageStatus.Delivered : PackageStatus.Lost;
  }
  get statusName(): string {
    return PackageStatus[this.status].toString();
  }
}
