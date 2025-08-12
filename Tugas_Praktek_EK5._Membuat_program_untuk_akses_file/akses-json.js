const fs = require("fs");

//Membuka & membaca file JSON
//Otomatis membuka
const teks = fs.readFileSync("data.json", "utf-8");
const data = JSON.parse(teks);

console.log("Isi Awal : ", data);

//Menulis data baru ke array
data.push({ id: 4, nama:"Jeremy", usia: 28});

//Menyimpan (menulis ulang)
//otomatis menutup
fs.writeFileSync("data-json", JSON.stringify(data, null, 2));

console.log("Data berhasil ditambahkan dan disimpan ulang");
console.log("Isi Akhir : ", data);

console.log("data awal: ", data);

console.log("=======================");


for (let i = 0; i < data.length; i++) {
    console.log(data[i].nama);
}
