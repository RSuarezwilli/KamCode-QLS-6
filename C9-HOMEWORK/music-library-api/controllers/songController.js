import { Song } from '../models/index.js';

export const createSong = async (req, res) => {
  try {
    const { title, releaseYear, duration, coverUrl, artistId } = req.body;
    const song = await Song.create({ title, releaseYear, duration, coverUrl, artistId });
    res.status(201).json(song);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAllSongs = async (req, res) => {
  try {
    const songs = await Song.findAll();
    res.json(songs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateSong = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, releaseYear, duration, coverUrl, artistId } = req.body;

    const song = await Song.findByPk(id);
    if (!song) return res.status(404).json({ message: 'Song not found' });

    await song.update({ title, releaseYear, duration, coverUrl, artistId });
    res.json(song);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteSong = async (req, res) => {
  try {
    const { id } = req.params;

    const song = await Song.findByPk(id);
    if (!song) return res.status(404).json({ message: 'Song not found' });

    await song.destroy();
    res.json({ message: 'Song deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
