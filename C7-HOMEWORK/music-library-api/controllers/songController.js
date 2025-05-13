import { Song, Artist } from '../models/index.js';

export const createSong = async (req, res) => {
  try {
    const song = await Song.create(req.body);
    res.status(201).json(song);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllSongs = async (_req, res) => {
  const songs = await Song.findAll({ include: Artist });
  res.json(songs);
};

export const updateSong = async (req, res) => {
  const song = await Song.findByPk(req.params.id);
  if (!song) return res.status(404).json({ error: 'Song not found' });

  try {
    await song.update(req.body);
    res.json(song);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteSong = async (req, res) => {
  const song = await Song.findByPk(req.params.id);
  if (!song) return res.status(404).json({ error: 'Song not found' });

  await song.destroy();
  res.status(204).end();
};
