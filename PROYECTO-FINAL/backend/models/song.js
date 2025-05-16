const { DataTypes } = require('sequelize');
const sequelize = require('../config');
const Artist = require('./artist');

const Song = sequelize.define('Song', {
  title: { type: DataTypes.STRING, allowNull: false },
  releaseYear: { type: DataTypes.INTEGER, allowNull: false },
  duration: { type: DataTypes.INTEGER, allowNull: false },
  coverUrl: { type: DataTypes.STRING, allowNull: false },
});

Song.belongsTo(Artist, { foreignKey: 'artistId', onDelete: 'CASCADE' });
Artist.hasMany(Song, { foreignKey: 'artistId' });

module.exports = Song;
