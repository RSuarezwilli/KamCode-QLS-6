import express from 'express';
import {
  getSongsByArtistId,
  getArtistsBySongDuration
} from '../controllers/artistController.js';

const router = express.Router();

router.get('/:id/songs', getSongsByArtistId);
router.get('/by-duration/:duration', getArtistsBySongDuration);

export default router;
