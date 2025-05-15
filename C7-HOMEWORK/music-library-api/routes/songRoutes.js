import express from 'express';
import {
  createSong,
  getAllSongs,
  updateSong,
  deleteSong
} from '../controllers/songController.js';

const router = express.Router();

router.post('/songs', createSong);
router.get('/songs', getAllSongs);
router.put('/songs/:id', updateSong);
router.delete('/songs/:id', deleteSong);

export default router;
