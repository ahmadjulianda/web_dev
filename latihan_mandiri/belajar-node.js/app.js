/**
 * Aplikasi Node.js paling sederhana
 * Memanggil fungsi dan menampilkan nama aplikasi
 */

const namaApp = require('./config/namaApp');    // Import nama aplikasi
const tampilkanSalam = require('./fungsi/tampilkanSalam');  // Import fungsi

// Menampilkan nama aplikasi ke terminal
console.log("Aplikasi:", namaApp);


// Menampilkan salam ke pengguna
tampilkanSalam();