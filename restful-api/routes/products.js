import { Router } from 'express';
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} from '../controllers/productController.js';

const router = Router();

// GET semua produk
router.get('/products', getAllProducts);

// GET produk by id
router.get('/products/:id', getProductById);

// CREATE produk baru
router.post('/products', createProduct);

// UPDATE produk
router.put('/products/:id', updateProduct);

// DELETE produk
router.delete('/products/:id', deleteProduct);

export default router;
