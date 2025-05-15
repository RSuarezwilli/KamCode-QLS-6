import sequelize from '../config/database.js';
import Artist from './artist.js';
import Song from './song.js';

// Definir relación: Un artista tiene muchas canciones
Artist.hasMany(Song, { foreignKey: 'artistId', onDelete: 'CASCADE' });
Song.belongsTo(Artist, { foreignKey: 'artistId' });

export { sequelize, Artist, Song };
