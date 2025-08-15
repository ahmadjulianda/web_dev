/*
const a=20;
const b=3;

console.log("Penjumlahan:", a + b);
console.log("Pengurangan:", a - b);
console.log("Perkalian:", a * b);
console.log("Pembagian:", a / b);
console.log("Sisa bagi:", a % b);
console.log("Pangkat:", a ** b);

console.log("----------------------");
console.log("Operator Assigment");
console.log("----------------------");

let x=10;

console.log("Tambah lalu simpan", x+=2);
console.log("Kurangi lalu simpan", x-=2);
console.log("Kali lalu simpan", x*=3);
console.log("Bagi lalu simpan", x/=2);
console.log("Modulus lalu simpan", x%=2);
*/

console.log(" ");
console.log("----------------------\nOperator Perbandingan\n----------------------");

const a = 10;
const b = '10';
const c = 5;

console.log("a == b:", a == b);
console.log("a === b:", a === b);
console.log("a != b:", a != b);
console.log("a !== b:", a !== b);
console.log("a > c:", a > c);
console.log("a < c:", a < c);
console.log("a >= 10:", a >= 10);
console.log("c <= 5:", c <= 5);

console.log(" ");
console.log("----------------------\nOperator Kondisional\n----------------------");

const nilai = 65;
const lulus = nilai >= 75;
const hadir = true;

// AND: harus dua-duanya benar
if (lulus && hadir) {
    console.log("Siswa lulus dan hadir.");
}


// OR: salah satu cukup
if (lulus || hadir) {
    console.log("Siswa dianggap aktif.");
}

// NOT: membalikkan kondisi
