// Getter (get): metode untuk mengambil/ membaca nilai properti.
// Setter (set): metode untuk mengatur/ mengubah nilai properti

class Car{
    constructor(brand) {
        this.carname = brand;
    }
    get carname() {
        return this._carname;
    }
    set carname(x) {
        this._carname = x;
    }
}

newcar = new Car('Pajero');
newcar.carname = 'Alphard'; //mengubah nilai carname
console.log(newcar.carname); //output: Alphard
