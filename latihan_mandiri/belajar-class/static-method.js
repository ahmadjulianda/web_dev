// static methods didefinisikan hanya untuk class itu sendiri

class Car{
    constructor(brand) {
        this._carname = brand;
    }
    static hai() {
        return "Hai, this is a static method";
    }
}

newcar = new Car('Pajero');
console.log(Car.hai()); //output: Hai, this is a static method
