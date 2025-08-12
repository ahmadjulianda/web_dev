// Data sepatu
const sepatu = [
  { nama: "New Balance NB530", harga: 390000 },
  { nama: "Nike Vomero 5", harga: 350000 },
  { nama: "Adidas Samba", harga: 180000 },
  { nama: "Onitsuka Tiger Mexico", harga: 420000 }
];

// Tampilkan daftar sepatu
console.log("Rincian Belanja Sepatu");
sepatu.forEach((item, index) => {
  console.log(`${index + 1}. ${item.nama} - Rp${item.harga}`);
});

// Hitung total belanja
let totalBelanja = sepatu.reduce((total, item) => total + item.harga, 0);
console.log(`\nTotal Belanja = Rp. ${totalBelanja}`);

// Tentukan diskon
let diskonPersen = 0;
if (totalBelanja < 250000) {
  diskonPersen = 0;
} else if (totalBelanja <= 499999) {
  diskonPersen = 5;
} else if (totalBelanja <= 799999) {
  diskonPersen = 10;
} else {
  diskonPersen = 15;
}

console.log(`Diskon ${diskonPersen}%`);

// Hitung total setelah diskon
let totalSetelahDiskon = totalBelanja - (totalBelanja * diskonPersen / 100);
console.log(`Total Setelah Diskon = Rp. ${totalSetelahDiskon}`);

// Pembayaran
let pembayaran = 1200000;
console.log(`Pembayaran = Rp. ${pembayaran}`);

// Hitung kembalian
let kembalian = pembayaran - totalSetelahDiskon;
console.log(`Kembalian = Rp. ${kembalian}`);
