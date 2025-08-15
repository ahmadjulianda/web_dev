# RESTful API (Express.js) - Products

Proyek ini mengikuti struktur dan langkah umum pada panduan "Penggunaan Express.js untuk membuat RESTful API".

## Struktur
```text
restful-api/
├─ controllers/
│  └─ productController.js
├─ routes/
│  └─ products.js
├─ index.js
└─ package.json
```

## Menjalankan
1. Install dependencies:
   ```bash
   npm install
   ```
2. Jalankan server:
   ```bash
   npm start
   ```
3. Server berjalan di `http://localhost:3000`

## Endpoints
- GET `/api/products` — Ambil semua produk
- GET `/api/products/:id` — Ambil produk berdasarkan ID
- POST `/api/products` — Tambah produk baru (body JSON: `{ name, price, stock? }`)
- PUT `/api/products/:id` — Perbarui produk (body JSON: `{ name?, price?, stock? }`)
- DELETE `/api/products/:id` — Hapus produk

## Contoh Body
```json
{
  "name": "Penggaris 30cm",
  "price": 8000,
  "stock": 25
}
```
