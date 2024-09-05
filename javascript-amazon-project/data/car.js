class Car {
    brand ;
    model ;
    isTrunkOpen;
    constructor(carobj) {
        this.brand = carobj.brand;
        this.model = carobj.model;
        this.isTrunkOpen = carobj.isTrunkOpen;

    }
    printVal() {
        console.log('The brand of the car is '+ this.brand );
        console.log('the model of the car is '+ this.model);
    }
    go() {
        console.log('ready to race');   
     }       
    checkTrunk()
    {
    if(this.isTrunkOpen) {
        console.log('The trunk is open Can\'t start the car')
    }
    else {
        this.go();
    }
    }
}

var car1 = new Car({
    brand: 'toyota',
    model: 'corolla',
    isTrunkOpen: true
});
car1.printVal();
car1.checkTrunk();
console.log('------------------------------------------------------');
var car2 = new Car({
    brand: 'Tesla',
    model: 'Model 3',
    isTrunkOpen: false
});
car2.printVal();
car2.checkTrunk();