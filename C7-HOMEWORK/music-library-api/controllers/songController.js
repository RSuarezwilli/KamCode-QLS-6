import { Song, Artist } from '../models/index.js';

// Crear canción
export async function createSong(req, res) {
  try {
    const newSong = await Song.create(req.body);
    res.status(201).json(newSong);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Obtener todas las canciones
export async function getAllSongs(req, res) {
  try {
    const songs = await Song.findAll();
    res.json(songs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Actualizar canción por ID
export async function updateSong(req, res) {
  try {
    const { id } = req.params;
    const [updated] = await Song.update(req.body, { where: { id } });
    if (updated) {
      const updatedSong = await Song.findByPk(id);
      res.json(updatedSong);
    } else {
      res.status(404).json({ error: 'Canción no encontrada' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Eliminar canción
export async function deleteSong(req, res) {
  try {
    const { id } = req.params;
    const deleted = await Song.destroy({ where: { id } });
    if (deleted) {
      res.json({ message: 'Canción eliminada correctamente' });
    } else {
      res.status(404).json({ error: 'Canción no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
