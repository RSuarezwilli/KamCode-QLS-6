const { Song, Artist } = require('../models');

const getAllSongs = async (req, res) => {
  try {
    const songs = await Song.findAll({ include: Artist });
    res.json(songs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getSongById = async (req, res) => {
  try {
    const song = await Song.findByPk(req.params.id, { include: Artist });
    if (!song) return res.status(404).json({ message: 'Canción no encontrada' });
    res.json(song);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getSongsByArtist = async (req, res) => {
  try {
    const songs = await Song.findAll({
      where: { artistId: req.params.artistId },
      include: Artist,
    });
    res.json(songs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createSong = async (req, res) => {
  try {
    const { title, artistId, releaseYear, duration, coverUrl } = req.body;
    const newSong = await Song.create({ title, artistId, releaseYear, duration, coverUrl });
    res.status(201).json(newSong);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateSong = async (req, res) => {
  try {
    const { title, artistId, releaseYear, duration, coverUrl } = req.body;
    const song = await Song.findByPk(req.params.id);
    if (!song) return res.status(404).json({ message: 'Canción no encontrada' });
    await song.update({ title, artistId, releaseYear, duration, coverUrl });
    res.json(song);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteSong = async (req, res) => {
  try {
    const song = await Song.findByPk(req.params.id);
    if (!song) return res.status(404).json({ message: 'Canción no encontrada' });
    await song.destroy();
    res.json({ message: 'Canción eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllSongs,
  getSongById,
  getSongsByArtist,
  createSong,
  updateSong,
  deleteSong,
};
