import sequelize from '../config/database.js';
import Artist from './artist.js';
import Song from './song.js';

Artist.hasMany(Song, { foreignKey: 'artistId', as: 'songs' });
Song.belongsTo(Artist, { foreignKey: 'artistId', as: 'artist' });

export { sequelize, Artist, Song };
