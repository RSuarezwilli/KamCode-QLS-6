import express from 'express';
import artistRoutes from './routes/artistRoutes.js';
import songRoutes from './routes/songRoutes.js';

const app = express();
app.use(express.json());

app.use('/api', artistRoutes);
app.use('/api', songRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
