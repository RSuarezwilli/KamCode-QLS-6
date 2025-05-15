import express from 'express';
import {
  createSong,
  getAllSongs,
  updateSong,
  deleteSong
} from '../controllers/songController.js';

const router = express.Router();

router.post('/', createSong);
router.get('/', getAllSongs);
router.put('/:id', updateSong);
router.delete('/:id', deleteSong);

export default router;

