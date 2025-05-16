const sequelize = require('../config/database');
const Artist = require('./artist');
const Song = require('./song');

const connectDb = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión con la base de datos establecida.');
    // Sincroniza modelos (no usar force: true en producción)
    await sequelize.sync();
    console.log('Modelos sincronizados.');
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  }
};


module.exports = { sequelize, Artist, Song };