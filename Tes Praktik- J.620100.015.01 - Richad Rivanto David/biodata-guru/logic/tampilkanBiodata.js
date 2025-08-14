// logic/tampilkanBiodata.js
// Fungsi untuk menampilkan biodata guru di terminal
// Author : Ahmad Julianda
// Date   : 12-08-2025

function tampilkanBiodata(guru, kategori) {
    console.log("== BIODATA GURU ==");
    console.log(`Nama                : ${guru[0].nama}`);
    console.log(`Umur                : ${guru.umur}`);
    console.log(`Asal                : ${guru.asal}`);
    console.log(`Tamatan             : ${guru.tamatan}`);
    console.log(`Tahun Pengangkatan  : ${guru.tahunPengangkatan}`);
    console.log(`Kategori Kondisi    : ${kategori}`);
}

module.exports = tampilkanBiodata;