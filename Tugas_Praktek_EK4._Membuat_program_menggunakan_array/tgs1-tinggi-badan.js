const dataTinggi = [
  {nama: "Rose", tinggi: 178},
  {nama: "Magnolia", tinggi: 153},
  {nama: "Daisy", tinggi: 165},
  {nama: "Jasmine", tinggi: 161},
  {nama: "Violet", tinggi: 159},
];

// Selesaikan loop for di bawah
for (let i = 0; i < dataTinggi.length; i++) {
  
  // Tentukan nilai constant character
  const character = dataTinggi[i];
  
  // Cetak "Nama saya adalah ____"
  console.log(`${character.nama} memiliki tinggi ${character.tinggi} cm`);
  
}
