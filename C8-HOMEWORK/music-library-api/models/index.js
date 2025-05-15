import sequelize from '../config/database.js';
import Artist from './artist.js';
import Song from './song.js';

Artist.hasMany(Song, { foreignKey: 'artistId' });
Song.belongsTo(Artist, { foreignKey: 'artistId' });

export { sequelize, Artist, Song };

