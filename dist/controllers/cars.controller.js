"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCarById = exports.getCars = void 0;
const cars_service_1 = require("../services/cars.service");
const getCars = async (req, res) => {
    try {
        const cars = await (0, cars_service_1.query)();
        res.json(cars);
    }
    catch (error) {
        res.status(500).json('Could not find cars');
    }
};
exports.getCars = getCars;
const getCarById = (req, res) => {
    const carToDisplay = {
        name: 'car 3',
        brand: 'Nissan',
        type: "Qashqai"
    };
    res.json(carToDisplay);
};
exports.getCarById = getCarById;
