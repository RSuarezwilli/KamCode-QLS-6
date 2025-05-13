// controllers/artistController.js
import Artist from '../models/artist.js';

export const createArtist = async (req, res) => {
  try {
    const artist = await Artist.create(req.body);
    res.status(201).json(artist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllArtists = async (req, res) => {
  try {
    const artists = await Artist.findAll();
    res.status(200).json(artists);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateArtist = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Artist.update(req.body, { where: { id } });
    if (updated) {
      const updatedArtist = await Artist.findByPk(id);
      res.status(200).json(updatedArtist);
    } else {
      res.status(404).json({ error: 'Artist not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteArtist = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Artist.destroy({ where: { id } });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Artist not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

