// 1. contoh kode object
const user = {name: "Ninja Ken", age: 14 };

console.log(user.age);



// 2. contoh kode object dan function
const pengguna = {
    name: "Ahmad",
//properti kedua pakai "arrow function"
    greet: () => {
        console.log("Selamat datang, Ahmad!");
    }
};
pengguna.greet();