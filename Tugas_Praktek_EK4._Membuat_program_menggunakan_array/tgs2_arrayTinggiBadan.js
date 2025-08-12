
const dataTinggi = [
  {nama: "Rose", tinggi: 178},
  {nama: "Magnolia", tinggi: 153},
  {nama: "Daisy", tinggi: 165},
  {nama: "Jasmine", tinggi: 161},
  {nama: "Violet", tinggi: 159},
];

dataTinggi.sort((a, b) => a.nama.localeCompare(b.nama))

// Selesaikan loop for di bawah
for (let i = 0; i < dataTinggi.length; i++) {
  
  // Tentukan nilai constant character
  const character = dataTinggi[i];
  
  // Cetak "Nama saya adalah ____"
  console.log(`${character.nama} : ${character.tinggi} cm`);
  
}