const express = require('express');
const cors = require('cors');
const { connectDb } = require('./models');

const app = express();
app.use(cors());
app.use(express.json());

const artistRoutes = require('./routes/artists');
const songRoutes = require('./routes/songs');

app.use('/artists', artistRoutes);
app.use('/songs', songRoutes);

const PORT = 5000;

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
  });
});