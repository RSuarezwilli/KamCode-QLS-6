import { Artist } from '../models/index.js';

// Crear un nuevo artista
export async function createArtist(req, res) {
  try {
    const newArtist = await Artist.create(req.body);
    res.status(201).json(newArtist);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Obtener todos los artistas
export async function getAllArtists(req, res) {
  try {
    const artists = await Artist.findAll();
    res.json(artists);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Actualizar artista por ID
export async function updateArtist(req, res) {
  try {
    const { id } = req.params;
    const [updated] = await Artist.update(req.body, { where: { id } });
    if (updated) {
      const updatedArtist = await Artist.findByPk(id);
      res.json(updatedArtist);
    } else {
      res.status(404).json({ error: 'Artista no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Eliminar artista
export async function deleteArtist(req, res) {
  try {
    const { id } = req.params;
    const deleted = await Artist.destroy({ where: { id } });
    if (deleted) {
      res.json({ message: 'Artista eliminado correctamente' });
    } else {
      res.status(404).json({ error: 'Artista no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
