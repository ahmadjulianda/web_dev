// Inisialisasi awal data (in-memory) - reset saat server restart
let products = [
  { id: 1, name: 'Pensil 2B', price: 3000, stock: 120 },
  { id: 2, name: 'Buku Tulis A5', price: 7000, stock: 80 },
  { id: 3, name: 'Pulpen Hitam', price: 5000, stock: 60 }
];

// Helper: konversi dan validasi id
function parseId(param) {
  const id = Number(param);
  return Number.isInteger(id) && id > 0 ? id : null;
}

// GET /api/products
export function getAllProducts(req, res) {
  res.json({
    count: products.length,
    data: products
  });
}

// GET /api/products/:id
export function getProductById(req, res) {
  const id = parseId(req.params.id);
  if (id === null) {
    return res.status(400).json({ error: true, message: 'ID tidak valid' });
  }
  const product = products.find(p => p.id === id);
  if (!product) {
    return res.status(404).json({ error: true, message: 'Produk tidak ditemukan' });
  }
  res.json(product);
}

// POST /api/products
// Body: { name: string, price: number, stock?: number }
export function createProduct(req, res) {
  const { name, price, stock = 0 } = req.body || {};
  if (typeof name !== 'string' || name.trim() === '') {
    return res.status(400).json({ error: true, message: 'Field name wajib diisi (string)' });
  }
  if (typeof price !== 'number' || price < 0) {
    return res.status(400).json({ error: true, message: 'Field price wajib number >= 0' });
  }
  if (typeof stock !== 'number' || stock < 0) {
    return res.status(400).json({ error: true, message: 'Field stock wajib number >= 0' });
  }
  const maxId = products.reduce((m, p) => Math.max(m, p.id), 0);
  const newProduct = {
    id: maxId + 1,
    name: name.trim(),
    price,
    stock
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
}

// PUT /api/products/:id
// Body: { name?: string, price?: number, stock?: number }
export function updateProduct(req, res) {
  const id = parseId(req.params.id);
  if (id === null) {
    return res.status(400).json({ error: true, message: 'ID tidak valid' });
  }
  const idx = products.findIndex(p => p.id === id);
  if (idx === -1) {
    return res.status(404).json({ error: true, message: 'Produk tidak ditemukan' });
  }
  const { name, price, stock } = req.body || {};

  if (name !== undefined && (typeof name !== 'string' || name.trim() === '')) {
    return res.status(400).json({ error: true, message: 'Field name harus string non-kosong' });
  }
  if (price !== undefined && (typeof price !== 'number' || price < 0)) {
    return res.status(400).json({ error: true, message: 'Field price harus number >= 0' });
  }
  if (stock !== undefined && (typeof stock !== 'number' || stock < 0)) {
    return res.status(400).json({ error: true, message: 'Field stock harus number >= 0' });
  }

  const updated = { ...products[idx] };
  if (name !== undefined) updated.name = name.trim();
  if (price !== undefined) updated.price = price;
  if (stock !== undefined) updated.stock = stock;

  products[idx] = updated;
  res.json(updated);
}

// DELETE /api/products/:id
export function deleteProduct(req, res) {
  const id = parseId(req.params.id);
  if (id === null) {
    return res.status(400).json({ error: true, message: 'ID tidak valid' });
  }
  const idx = products.findIndex(p => p.id === id);
  if (idx === -1) {
    return res.status(404).json({ error: true, message: 'Produk tidak ditemukan' });
  }
  const deleted = products.splice(idx, 1)[0];
  res.json({ deleted });
}
