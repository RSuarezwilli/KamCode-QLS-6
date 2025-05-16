const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('musicdb', 'tu_usuario', 'tu_contraseña', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
});

module.exports = sequelize;
