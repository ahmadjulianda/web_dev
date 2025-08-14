const guru = require('./data/guru.js');
const tentukanKategori = require('./logic/logikaKategori.js');
const tampilkanBiodata = require('./logic/tampilkanBiodata.js');
const {VERSI_APLIKASI, PENANGGUNG_JAWAB} = require('./config/aplikasi.js');

// Tentukan kategori pengangkatan
const kategori = tentukanKategori(guru.tahunPengangkatan);

// Tampilkan biodata guru
tampilkanBiodata(guru, kategori);

// Tampilkan info aplikasi
console.log("\n== INFO APLIKASI ==");
console.log(`Versi              : ${VERSI_APLIKASI}`);
console.log(`Penanggung Jawab   : ${PENANGGUNG_JAWAB}`);


