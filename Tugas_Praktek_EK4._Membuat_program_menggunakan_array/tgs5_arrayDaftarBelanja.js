const daftarBelanja = [];
daftarBelanja.push("Beras", "Minyak", "Gula");

let index = daftarBelanja.indexOf("Minyak");
//console.log(index);

daftarBelanja.splice(index, 1);
//console.log(daftarBelanja);

daftarBelanja.push("Telur", "Sayur", "Buah");
//console.log(daftarBelanja);

daftarBelanja.sort();
for (let i = 1; i <= daftarBelanja.length; i++ ) {
    console.log(`${i}` + ". "+ daftarBelanja[i-1]);
}