const cars = [
    {
        id: 0,
        name: 'Stellaris',
        brand: "Nissan",
        type: "Micra"
    },
    {
        id: 1,
        name: 'Zephyr',
        brand: "Toyota",
        type: "RAV 4"
    },
    {
        id: 2,
        name: 'Ember',
        brand: "Toyota",
        type: "CHR"
    },
    {
        id: 3,
        name: 'Equinox',
        brand: "Toyota",
        type: "CHR"
    },
    {
        id: 4,
        name: 'Maverick',
        brand: "Toyota",
        type: "CHR"
    },
    {
        id: 5,
        name: 'Veritas',
        brand: "Toyota",
        type: "CHR"
    },
    {
        id: 6,
        name: 'Nocturne',
        brand: "Toyota",
        type: "CHR"
    },
    {
        id: 7,
        name: 'Sundancer',
        brand: "Toyota",
        type: "CHR"
    },
    {
        id: 9,
        name: 'Serpent',
        brand: "Toyota",
        type: "CHR"
    },
    {
        id: 9,
        name: 'Horizon',
        brand: "Toyota",
        type: "CHR"
    },
    {
        id: 10,
        name: 'Nova',
        brand: "Toyota",
        type: "CHR"
    },
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