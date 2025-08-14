// logic/logikaKategori.js
// Fungsi untuk menentukan kategori kelulusan berdasarkan tahun lulus
// Author : Ahmad Julianda
// Date   : 12-08-2025

function tentukanKategori(tahunLulus) {
    // Jika tahun lulus < 2019
    if (tahunLulus < 2019) {
        return "Lulus Sebelum Covid";
    }
    // Jika tahun lulus antara 2019 - 2021
    else if (tahunLulus >= 2019 && tahunLulus <= 2021) {
        return "Lulus Saat Covid";
    }
    // Jika tahun lulus > 2021
    else {
        return "Lulus Setelah Covid";
    }
}

module.exports = tentukanKategori;
