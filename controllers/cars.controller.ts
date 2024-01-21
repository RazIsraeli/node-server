import { Request, Response } from 'express';
import { getById, query } from '../services/cars.service';
import { sseService } from '../server';

export const getCars = async (req: Request, res: Response) => {
    try {
        const cars = await query();
        res.json(cars);

        const sseCars = {
            type: 'cars',
            ...cars
        }
        sseService.sendMessageToAll(sseCars);

    } catch (error) {
        res.status(500).json('Could not find cars');
    }
};

export const getCarById = async (req: Request, res: Response) => {
    const carId = Number(req.params.id);

    try {
        const car = await getById(Number(carId));
        res.json(car);

        const sseCar = {
            type: 'car',
            ...car
        }

        sseService.sendMessageToAll(sseCar);
    } catch (error) {
        res.status(500).json(`Could not find car with id: ${carId}`);
    }
}