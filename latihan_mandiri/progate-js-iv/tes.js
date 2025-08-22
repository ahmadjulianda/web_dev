class Barang {
    constructor(nama, jenis, lokasi, pj) {
        this.nama = nama;
        this.jenis = jenis;
        this.lokasi = lokasi;
        this.pj = pj;
    }

    notif() {
        console.log("Penambahan barang baru");
    }
    info() {
        console.log(`Nama barang Inventaris: ${this.nama}`);
        console.log(`Jenis barang Inventaris: ${this.jenis}`);
        console.log(`Lokasi Penempatan Barang Inventaris: ${this.lokasi}`);
        console.log(`Penanggung Jawab Barang Inventaris: ${this.pj}`);
    }
}

console.log("===================================");

const barang1 = new Barang("Papan Tulis", "Perangkat Belajar", "Ruang Kelas Pondok", "Haerul");
barang1.notif();
barang1.info();

console.log("\n==================================\n");

const barang2 = new Barang("Komputer", "Perangkat IT", "Kantor Guru Pondok", "Farid");
barang2.notif();
barang2.info();

console.log("\n==================================\n");

const barang3 = new Barang("Dispenser", "Perangkat Konsumsi", "Asrama Pondok", "Rizki");
barang3.notif();
barang3.info();