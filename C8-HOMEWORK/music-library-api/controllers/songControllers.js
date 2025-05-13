import { Song, Artist } from '../models/index.js';

export const createSong = async (req, res) => {
  try {
    const song = await Song.create(req.body);
    res.status(201).json(song);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllSongs = async (req, res) => {
  try {
    const songs = await Song.findAll({
      include: [{
        model: Artist,
        attributes: ['id', 'name']
      }]
    });
    res.json(songs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getSongById = async (req, res) => {
  try {
    const song = await Song.findByPk(req.params.id, {
      include: [{
        model: Artist,
        attributes: ['id', 'name']
      }]
    });
    if (!song) return res.status(404).json({ error: 'Canción no encontrada' });
    res.json(song);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateSong = async (req, res) => {
  try {
    const [updated] = await Song.update(req.body, {
      where: { id: req.params.id }
    });
    if (!updated) return res.status(404).json({ error: 'Canción no encontrada' });
    const updatedSong = await Song.findByPk(req.params.id);
    res.json(updatedSong);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteSong = async (req, res) => {
  try {
    const deleted = await Song.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'Canción no encontrada' });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
