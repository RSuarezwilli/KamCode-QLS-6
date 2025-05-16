import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Artist = sequelize.define('Artist', {
  name: DataTypes.STRING,
  bio: DataTypes.TEXT,
  photoUrl: DataTypes.STRING
});

export default Artist;