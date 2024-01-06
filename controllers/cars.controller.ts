import { Request, Response } from 'express';

const cars = [
    {
        name: 'car 1',
        brand: "Nissan",
        type: "Micra"
    },
    {
        name: 'car 2',
        brand: "Toyota",
        type: "RAV 4"
    }
]

export const getCars = (req: Request, res: Response) => {
    res.json(cars)
};

export const getCarById = (req: Request, res: Response) => {
    const carToDisplay = {
        name: 'car 3',
        brand: 'Nissan',
        type: "Qashqai"
    }
    res.json(carToDisplay)
}