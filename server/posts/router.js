import express from 'express';
import { getAllVhs, createVhs, updateVhs, deleteVhs } from '../controllers/routeFunctions.js';

const router = express.Router();

router.get('/', getAllVhs);

router.post('/', createVhs);

router.patch('/:id', updateVhs)

router.delete('/:id', deleteVhs);




export default router;