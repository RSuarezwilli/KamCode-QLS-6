import express from 'express';

const router = express.Router();

// Array en memoria
let products = [
  {
    id: 1,
    name: 'Laptop',
    price: 1000,
    category: 'Electronics',
    description: 'A high performance laptop'
  },
  {
    id: 2,
    name: 'Coffee Mug',
    price: 10,
    category: 'Kitchenware',
    description: 'A ceramic coffee mug'
  }
];

// Obtener todos los productos
router.get('/', (req, res) => {
  res.json(products);
});

// Obtener producto por ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);
  if (!product) return res.status(404).json({ error: 'Producto no encontrado' });
  res.json(product);
});

// Crear nuevo producto
router.post('/', (req, res) => {
  const { name, price, category, description } = req.body;
  if (!name || !category || !description || typeof price !== 'number' || price <= 0) {
    return res.status(400).json({ error: 'Datos inválidos' });
  }
  const newProduct = {
    id: products.length ? Math.max(...products.map(p => p.id)) + 1 : 1,
    name,
    price,
    category,
    description
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// Actualizar producto
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === id);
  if (index === -1) return res.status(404).json({ error: 'Producto no encontrado' });

  const { name, price, category, description } = req.body;
  if (!name || !category || !description || typeof price !== 'number' || price <= 0) {
    return res.status(400).json({ error: 'Datos inválidos' });
  }

  products[index] = { id, name, price, category, description };
  res.json(products[index]);
});

// Eliminar producto
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === id);
  if (index === -1) return res.status(404).json({ error: 'Producto no encontrado' });

  const deleted = products.splice(index, 1);
  res.json(deleted[0]);
});

export default router;
