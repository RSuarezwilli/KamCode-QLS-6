import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('musicdb', 'postgres', 'tu_contraseña', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false
});

export default sequelize;
