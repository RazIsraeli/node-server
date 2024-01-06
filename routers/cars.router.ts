import express from 'express';
import { getCarById, getCars } from '../controllers/cars.controller';

const router = express.Router();

router.get('/', getCars);
router.get('/:id', getCarById);

export default router;