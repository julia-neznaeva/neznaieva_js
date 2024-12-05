import { IDimensions } from "./IDimensions";
import { PackageStatus } from "./PackageStatus";

export interface IParcel{
     readonly id:number;
     weight:number;
     dimensions: IDimensions;
     description?:string;
     sender:number|string;
     status:PackageStatus;
    
    deliver(isSuccess:boolean):void;
    get statusName():string;
}