import { Request, Response } from 'express';
import { getById, query, deleteById } from '../services/cars.service';
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

export const removeCarById = async (req: Request, res: Response) => {
    try {
        const { carId } = req.body;
        const carToRemove = await deleteById(carId);
        res.send(carToRemove);
    } catch (error) {
        console.error('Failed to remove car', error)
        res.status(500).send({ err: 'Failed to remove car' })
    }
}