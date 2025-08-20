class Car {
    constructor(brand,factory) {
        this._carname = brand;
        this._factory = factory;
    }
    get carname() {
        return this._carname;
    }
    set carname(x) {
        this._carname = x;
    }
    get factory() {
        return this._factory;
    }
    set factory(x) {
        this._factory = x;
    }
}

newcar = new Car('Pajero', 'Mitsubishi');
newcar.carname = 'Alphard';
newcar.factory = 'Toyota';
console.log(newcar.carname);
console.log(newcar.factory);

