"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.query = void 0;
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
];
async function query() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(cars);
        }, 1000);
    });
}
exports.query = query;
