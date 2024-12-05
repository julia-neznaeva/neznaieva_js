import { Parcel } from "./Parcel";
import { PackageStatus } from "./PackageStatus";
import { Dimentions } from "./Dimensions";

const dimensions = new Dimentions(105,44,50.5);
const item: Parcel = new Parcel(22.5, dimensions, "Nick Scot",  PackageStatus.Pending, "Super power inside.")
  
item.deliver(true);

console.log(item.statusName);
