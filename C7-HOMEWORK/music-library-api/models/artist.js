import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Artist = sequelize.define('Artist', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bio: {
    type: DataTypes.TEXT,
  },
  photoUrl: {
    type: DataTypes.STRING,
  }
}, {
  tableName: 'artists',
  timestamps: false
});

export default Artist;
