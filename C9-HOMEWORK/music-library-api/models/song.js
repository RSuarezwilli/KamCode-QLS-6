import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Artist from './artist.js';

const Song = sequelize.define('Song', {
  title: DataTypes.STRING,
  releaseYear: DataTypes.INTEGER,
  duration: DataTypes.INTEGER,
  coverUrl: DataTypes.STRING
});

Artist.hasMany(Song, { foreignKey: 'artistId' });
Song.belongsTo(Artist, { foreignKey: 'artistId' });

export default Song;

