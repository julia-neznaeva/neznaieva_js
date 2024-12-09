@withEmploymentDate
export class Manager {

    public task: string = 'Simple task'
    
    public project: string = 'Simple project'
    
    constructor(){
    
    console.log('Initializing the Manager class')
    }
}

function withEmploymentDate<T extends { new(...args:any[]):{} }>(constructor:T) {

    return class extends constructor {
        date = new Date();
    }
}