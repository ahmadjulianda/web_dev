persiapan awal:
1. pertama : install package.json dengan command : npm init -y
2. instal express, mysql, cors dan nodemon
3. tambahkan type = module di package.json
4. install dotenv
5. npm install -D prisma
6. npm install @prisma/client
7. npx prisma init

- di schema : hapus output dan ganti database jadi mysql

- konfigurasi database di .env : mysql://root:poyan1896RE@localhost:3306/db_siswa

- di schema buat model datasiswa{}

- kemudian di migrate : npx prisma migrate dev
Enter a name for the new migration: tabelsiswa

- buat file index.js, kemudian isi import dari express, cors, dan dotenv

- di index.js konfigurasi dotenv
- atur kode : const app=express()  ||  const PORT=8000  ||  app.listen

- jalankan dengan : npm start

- tambah middleware di index.js

- buat folder controller dan routes di dalam backend : buat file siswaController.js dan siswaRoute.js