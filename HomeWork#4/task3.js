class Plane{
    constructor(model, fluelSupply, fuelConsumption){
        this._model = model;
        this._fluelSupply = fluelSupply;
        this._fuelConsumption = fuelConsumption;
    }

    calcFlightRange(){
        return this._fluelSupply/this._fuelConsumption*100;
    }

    static sortFlightRange(panelArrays){
        panelArrays.sort((a,b)=>a.calcFlightRange()-b.calcFlightRange());
        panelArrays.forEach(element => {
            console.log(`${element._model}: ${element.calcFlightRange()}`)
        });
    }
}

class TransportPlane extends Plane{
    constructor(model, fluelSupply, fuelConsumption, cargo, addTank ){
        super(model, fluelSupply, fuelConsumption);
        this._cargo = cargo;
        this._addTank = addTank;
    }

    calcFlightRange(){
        return (this._addTank+this._fluelSupply)/this._fuelConsumption*100;
    }
}

class PassengerPlane extends Plane{
    constructor(model, fluelSupply, fuelConsumption, passengers, refueling ){
        super(model, fluelSupply, fuelConsumption);
        this._passengers = passengers;
        this._refueling = refueling;

    }
    calcFlightRange(){
        return (this._refueling + this._fluelSupply)/this._fuelConsumption*100;
    }
}

class WarPlane extends Plane{
    constructor(model, fluelSupply, fuelConsumption, missiles, aerodynamicsKoef ){
        super(model, fluelSupply, fuelConsumption);
        this._missiles = missiles;
        this._aerodynamicsKoef = aerodynamicsKoef;
    }
    calcFlightRange(){
        return super.calcFlightRange()*this._aerodynamicsKoef;
    }
}

console.log("Unsorted range of planes:");

const plane1 = new TransportPlane("An-225 Mriya", 105000, 5000, 500, 300000);

console.log("An-225 Mriya: ", plane1.calcFlightRange());

const plane2 = new PassengerPlane("Boeing-747", 193000, 2500, 410, 90000);

console.log("Boeing-747:", plane2.calcFlightRange());

const plane3 = new WarPlane("F-22 Raptor", 8200, 320, 20, 1.2);

console.log("F-22 Raptor:", plane3.calcFlightRange());

console.log("Sorted range of planes:");

const planesArray = [plane1, plane2, plane3];

Plane.sortFlightRange(planesArray);