// logic/tampilkanBiodata.js
// Fungsi untuk menampilkan biodata siswa di terminal
// Author : Ahmad Julianda
// Date   : 12-08-2025

function tampilkanBiodata(siswa, kategori) {
    console.log("== BIODATA SISWA ==");
    console.log(`Nama       : ${siswa.nama}`);
    console.log(`Umur       : ${siswa.umur}`);
    console.log(`Asal       : ${siswa.asal}`);
    console.log(`Sekolah    : ${siswa.sekolah}`);
    console.log(`Tahun lulus: ${siswa.tahunLulus}`);
    console.log(`Kategori   : ${kategori}`);
}

module.exports = tampilkanBiodata;
