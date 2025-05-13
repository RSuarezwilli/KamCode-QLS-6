import Artist from './artist.js';
import Song from './song.js';
import sequelize from '../config/database.js';

Artist.hasMany(Song, { foreignKey: 'artistId' });
Song.belongsTo(Artist, { foreignKey: 'artistId' });

export { Artist, Song, sequelize };

