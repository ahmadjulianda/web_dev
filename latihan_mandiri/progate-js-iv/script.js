/*
// 1. contoh kode object
const user = {name: "Ninja Ken", age: 14 };

console.log(user.age);
*/

// =====================================================================================================

/*
// 2. contoh kode object dan function
const pengguna = {
    name: "Ahmad",
//properti kedua pakai "arrow function"
    greet: () => {
        console.log("Selamat datang, Ahmad!");
    }
};
pengguna.greet();
*/

// ======================================================================================================

/*
// 3. membuat instance(object baru) dan 4. constructor
class Animal {
    // Tambahkan constructor
    constructor() {
        //console.log("Membuat instance baru");
        this.name = "Leo";
    }
}

//tetapkan nama instance
const animal = new Animal();
console.log(animal);
*/

// =======================================================================================================

/*
class Animal {
    constructor() {
        console.log("Hewan baru ditambahkan");
        
    }
}

const sapi = new Animal();
*/

// ---------------------------------------------------------------------------------------------------------

/*
class Animal {
    constructor() {
        this.name = "Leo";
        this.age = "3";
        this.country = "USA"
    }
}

const animal = new Animal();
console.log("nama: " + animal.name + ", umur: " + animal.age);
*/

//===========================================================================================================

/*
class Animal {
    constructor() {
        this.name = "Leo";
        this.age = "3";
        this.country = "USA"
    }
}

const animal = new Animal();
console.log("nama: " + animal.name + ", umur: " + animal.age);
*/

//===========================================================================================================

class Animal {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
}

const sapi = new Animal("Sapi", 3, "Indonesia");
console.log("nama: " + sapi.name + ", umur: " + sapi.age);

const zebra = new Animal("Zebra", 4, "Afrika");
console.log("nama: " + zebra.name + ", umur: " + zebra.age);

const penguin = new Animal("Penguin", 1, "Antartika");
console.log("nama: " + penguin.name + ", umur: " + penguin.age);

const kangguru = new Animal("Kangguru", 2, "Antartika");
console.log("nama: " + kangguru.name + ", umur: " + kangguru.age);