import express from 'express';
import {
  createArtist,
  getAllArtists,
  getArtistById,
  updateArtist,
  deleteArtist
} from '../controllers/artistController.js';

const router = express.Router();

router.post('/', createArtist);
router.get('/', getAllArtists);
router.get('/:id', getArtistById);
router.put('/:id', updateArtist);
router.delete('/:id', deleteArtist);

export default router;
