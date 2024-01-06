const cars = [
    {
        id: 0,
        name: 'car 1',
        brand: "Nissan",
        type: "Micra"
    },
    {
        id: 1,
        name: 'car 2',
        brand: "Toyota",
        type: "RAV 4"
    },
    {
        id: 2,
        name: 'car 3',
        brand: "Toyota",
        type: "CHR"
    }
]

export function query(): Promise<any[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(cars);
        }, 1500);
    })
}

export function getById(carId: number): Promise<any> {

    const carToDisplay = cars.find(car => car.id === carId);
    if (!carToDisplay) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject();
            }, 1500);
        })
    }

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(carToDisplay);
        }, 1500);
    })
}