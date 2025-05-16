import express from 'express';
import { sequelize } from './models/index.js';
import artistRoutes from './routes/artistRoutes.js';
import songRoutes from './routes/songRoutes.js';

const app = express();
app.use(express.json());

app.use('/artists', artistRoutes);
app.use('/songs', songRoutes);

const PORT = 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
  });
});
