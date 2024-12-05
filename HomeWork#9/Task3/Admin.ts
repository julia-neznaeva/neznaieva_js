import { User } from "./User";
import { IPrintable } from "./IPrintable";

export class Admin extends User implements IPrintable {
    isActive: boolean;

    readonly active:string = "https://softserve/profile/";
    readonly inactive:string  = "https://softserve/login";
    readonly id:number 

    constructor(email:string, password:string, isActive:boolean = true) {
        super(email, password);
        this.isActive = isActive;
        this.id = User.id + 1;
        User.id = this.id;
        
    }
    
    print(): void {
        console.log(typeof(this));
    }
    showProfile(): void {
        if(this.isActive){
            console.log(this.active+this.id)
        }
        
    }

}