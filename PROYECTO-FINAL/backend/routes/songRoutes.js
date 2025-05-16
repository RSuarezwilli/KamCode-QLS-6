const express = require('express');
const router = express.Router();
const { Song, Artist } = require('../models');

router.get('/', async (req, res) => {
  const songs = await Song.findAll({ include: Artist });
  res.json(songs);
});

router.get('/:id', async (req, res) => {
  const song = await Song.findByPk(req.params.id, { include: Artist });
  if (!song) return res.status(404).json({ error: 'Song not found' });
  res.json(song);
});

router.post('/', async (req, res) => {
  try {
    const song = await Song.create(req.body);
    res.status(201).json(song);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  const song = await Song.findByPk(req.params.id);
  if (!song) return res.status(404).json({ error: 'Song not found' });

  try {
    await song.update(req.body);
    res.json(song);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  const song = await Song.findByPk(req.params.id);
  if (!song) return res.status(404).json({ error: 'Song not found' });

  await song.destroy();
  res.json({ message: 'Song deleted' });
});

// Obtener canciones por artista
router.get('/artist/:artistId', async (req, res) => {
  const songs = await Song.findAll({
    where: { artistId: req.params.artistId },
    include: Artist,
  });
  res.json(songs);
});

module.exports = router;
