const express = require('express');
const router = express.Router();
const { Artist, Song } = require('../models');

router.get('/', async (req, res) => {
  const artists = await Artist.findAll();
  res.json(artists);
});

router.get('/:id', async (req, res) => {
  const artist = await Artist.findByPk(req.params.id, { include: Song });
  if (!artist) return res.status(404).json({ error: 'Artist not found' });
  res.json(artist);
});

router.post('/', async (req, res) => {
  try {
    const artist = await Artist.create(req.body);
    res.status(201).json(artist);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  const artist = await Artist.findByPk(req.params.id);
  if (!artist) return res.status(404).json({ error: 'Artist not found' });

  try {
    await artist.update(req.body);
    res.json(artist);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  const artist = await Artist.findByPk(req.params.id);
  if (!artist) return res.status(404).json({ error: 'Artist not found' });

  await artist.destroy();
  res.json({ message: 'Artist deleted' });
});

module.exports = router;

