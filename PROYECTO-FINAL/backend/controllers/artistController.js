const { Artist, Song } = require('../models');

const getAllArtists = async (req, res) => {
  try {
    const artists = await Artist.findAll();
    res.json(artists);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getArtistById = async (req, res) => {
  try {
    const artist = await Artist.findByPk(req.params.id, { include: Song });
    if (!artist) return res.status(404).json({ message: 'Artista no encontrado' });
    res.json(artist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createArtist = async (req, res) => {
  try {
    const { name, bio, photoUrl } = req.body;
    const newArtist = await Artist.create({ name, bio, photoUrl });
    res.status(201).json(newArtist);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateArtist = async (req, res) => {
  try {
    const { name, bio, photoUrl } = req.body;
    const artist = await Artist.findByPk(req.params.id);
    if (!artist) return res.status(404).json({ message: 'Artista no encontrado' });
    await artist.update({ name, bio, photoUrl });
    res.json(artist);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteArtist = async (req, res) => {
  try {
    const artist = await Artist.findByPk(req.params.id);
    if (!artist) return res.status(404).json({ message: 'Artista no encontrado' });
    await artist.destroy();
    res.json({ message: 'Artista eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllArtists,
  getArtistById,
  createArtist,
  updateArtist,
  deleteArtist,
};
