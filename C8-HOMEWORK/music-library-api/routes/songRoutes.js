import express from 'express';
import {
  createArtist,
  getAllArtists,
  updateArtist,
  deleteArtist
} from '../controllers/artistController.js';

const router = express.Router();

router.post('/', createArtist);
router.get('/', getAllArtists);
router.put('/:id', updateArtist);
router.delete('/:id', deleteArtist);

export default router;
