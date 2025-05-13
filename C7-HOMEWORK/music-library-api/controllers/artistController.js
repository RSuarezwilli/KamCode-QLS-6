import Artist from '../models/artist.js';

// Crear un artista
export const createArtist = async (req, res) => {
  try {
    const { name, bio, photoUrl } = req.body;
    const newArtist = await Artist.create({ name, bio, photoUrl });
    res.status(201).json(newArtist);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear el artista', details: error.message });
  }
};

// Obtener todos los artistas
export const getAllArtists = async (req, res) => {
  try {
    const artists = await Artist.findAll();
    res.json(artists);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los artistas', details: error.message });
  }
};

// Actualizar un artista
export const updateArtist = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, bio, photoUrl } = req.body;

    const artist = await Artist.findByPk(id);
    if (!artist) return res.status(404).json({ error: 'Artista no encontrado' });

    await artist.update({ name, bio, photoUrl });
    res.json(artist);
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar el artista', details: error.message });
  }
};

// Eliminar un artista
export const deleteArtist = async (req, res) => {
  try {
    const { id } = req.params;
    const artist = await Artist.findByPk(id);
    if (!artist) return res.status(404).json({ error: 'Artista no encontrado' });

    await artist.destroy();
    res.json({ message: 'Artista eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el artista', details: error.message });
  }
};


