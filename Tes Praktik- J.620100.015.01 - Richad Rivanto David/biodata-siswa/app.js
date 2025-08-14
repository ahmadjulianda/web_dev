// app.js
// Program utama Node.js

const siswa = require('./data/siswa');
const tentukanKategori = require('./logic/logikaKategori');
const tampilkanBiodata = require('./logic/tampilkanBiodata');
const { VERSI_APLIKASI, PENANGGUNG_JAWAB } = require('./config/config');

// Tentukan kategori kelulusan
const kategori = tentukanKategori(siswa.tahunLulus);

// Tampilkan biodata siswa
tampilkanBiodata(siswa, kategori);

// Tampilkan info aplikasi
console.log("\n== INFO APLIKASI ==");
console.log(`Versi            : ${VERSI_APLIKASI}`);
console.log(`Penanggung Jawab : ${PENANGGUNG_JAWAB}`);
