import express from 'express';
import artistRoutes from '../routes/artistRoutes.js';
import songRoutes from '../routes/sonRoutes.js';
import { sequelize } from '../config/config.js'; // tu conexión Sequelize

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());

// Rutas
app.use('/artists', artistRoutes);
app.use('/songs', songRoutes);

// Probar conexión a la base de datos
sequelize.authenticate()
  .then(() => {
    console.log('Conexión a la base de datos establecida correctamente.');
  })
  .catch((err) => {
    console.error('Error al conectar con la base de datos:', err);
  });

// Levantar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

