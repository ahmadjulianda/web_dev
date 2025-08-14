// logic/logikaKategori.js
// Fungsi untuk menentukan kategori kelulusan berdasarkan tahun lulus
// Author : Ahmad Julianda
// Date   : 12-08-2025

function tentukanKategori(tahunPengangkatan) {
    // Jika tahun pengangkatan < 2019
    if (tahunPengangkatan < 2019) {
        return "Pengangkatan Sebelum Covid";
    }
    // Jika tahun pengangkatan antara 2019 - 2021
    else if (tahunPengangkatan >= 2019 && tahunPengangkatan <= 2021) {
        return "Pengangkatan Saat Covid";
    }
    // Jika tahun pengangkatan > 2021 
    else {
        return "Pengangkatan Setelah Covid";
    }
}

module.exports = tentukanKategori;