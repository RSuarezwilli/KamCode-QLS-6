import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Song = sequelize.define('Song', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  releaseYear: {
    type: DataTypes.INTEGER,
  },
  duration: {
    type: DataTypes.INTEGER,
  },
  coverUrl: {
    type: DataTypes.STRING,
  },
  artistId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  tableName: 'songs',
  timestamps: false
});

export default Song;
