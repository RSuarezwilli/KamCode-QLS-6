// models/song.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Song = sequelize.define('Song', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  artistId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  releaseYear: {
    type: DataTypes.INTEGER
  },
  duration: {
    type: DataTypes.INTEGER  // segundos
  },
  coverUrl: {
    type: DataTypes.STRING
  }
}, {
  timestamps: false
});

export default Song;
