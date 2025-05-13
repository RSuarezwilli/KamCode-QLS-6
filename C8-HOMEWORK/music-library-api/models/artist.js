import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Artist = sequelize.define('Artist', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [2, 100]
    }
  },
  bio: {
    type: DataTypes.TEXT
  },
  photoUrl: {
    type: DataTypes.STRING,
    validate: {
      isUrl: true
    }
  }
}, {
  timestamps: false
});

export default Artist;

