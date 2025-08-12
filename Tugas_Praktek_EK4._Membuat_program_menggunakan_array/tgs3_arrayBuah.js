let buah = [];
buah.push("Apel", "Mangga", "Jeruk", "Semangka", "Pisang", "Anggur", "Nanas", "Rambutan");

buah.sort();
for (let i = 1; i <= buah.length; i++ ) {
    console.log(`${i}` + ". "+ buah[i-1]);
}
