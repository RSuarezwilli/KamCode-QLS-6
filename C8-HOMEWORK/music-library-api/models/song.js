import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Song = sequelize.define('Song', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [2, 100]
    }
  },
  artistId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  releaseYear: {
    type: DataTypes.INTEGER,
    validate: {
      min: 1900,
      max: new Date().getFullYear()
    }
  },
  duration: {
    type: DataTypes.INTEGER,
    validate: {
      min: 1
    }
  },
  coverUrl: {
    type: DataTypes.STRING,
    validate: {
      isUrl: true
    }
  }
}, {
  timestamps: false
});

export default Song;
