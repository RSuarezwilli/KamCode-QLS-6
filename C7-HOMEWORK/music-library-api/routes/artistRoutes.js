import express from 'express';
import {
  createArtist,
  getAllArtists,
  updateArtist,
  deleteArtist
} from '../controllers/artistController.js';

const router = express.Router();

router.post('/artists', createArtist);
router.get('/artists', getAllArtists);
router.put('/artists/:id', updateArtist);
router.delete('/artists/:id', deleteArtist);

export default router;
