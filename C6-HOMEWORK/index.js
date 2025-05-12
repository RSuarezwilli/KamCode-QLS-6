import express from 'express';
import productRoutes from './routes/products.js';

const app = express();
const PORT = 3000;

app.use(express.json()); // Permite recibir JSON
app.use('/products', productRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
