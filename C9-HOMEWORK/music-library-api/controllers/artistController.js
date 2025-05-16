import { Artist, Song } from '../models/index.js';

export const getSongsByArtistId = async (req, res) => {
  try {
    const artist = await Artist.findByPk(req.params.id, {
      include: Song
    });

    if (!artist) return res.status(404).json({ message: 'Artist not found' });

    res.json(artist.Songs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getArtistsBySongDuration = async (req, res) => {
  try {
    const duration = parseInt(req.params.duration, 10);
    const artists = await Artist.findAll({
      include: {
        model: Song,
        where: {
          duration: {
            [Op.gte]: duration
          }
        }
      }
    });

    res.json(artists);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
