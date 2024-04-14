import express from 'express';
import { getCarById, getCars, removeCarById } from '../controllers/cars.controller';

const router = express.Router();

router.get('/', getCars);
router.get('/:id', getCarById);
router.post('/deleteCar', removeCarById);

export default router;