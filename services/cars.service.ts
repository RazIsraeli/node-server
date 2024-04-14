let cars = [
    {
        id: 0,
        name: 'Stellaris',
        brand: "Nissan",
        carType: "Micra"
    },
    {
        id: 1,
        name: 'Zephyr',
        brand: "Toyota",
        carType: "RAV 4"
    },
    {
        id: 2,
        name: 'Ember',
        brand: "Audi",
        carType: "RS6"
    },
    {
        id: 3,
        name: 'Equinox',
        brand: "Ford",
        carType: "Mustang "
    },
    {
        id: 4,
        name: 'Maverick',
        brand: "Toyota",
        carType: "CHR"
    },
    {
        id: 5,
        name: 'Veritas',
        brand: "Jeep",
        carType: "Wrangler "
    },
    {
        id: 6,
        name: 'Nocturne',
        brand: "Tesla",
        carType: "Model S"
    },
    {
        id: 7,
        name: 'Sundancer',
        brand: "BMW",
        carType: " M2"
    },
    {
        id: 9,
        name: 'Serpent',
        brand: "Porsche",
        carType: "Taycan"
    },
    {
        id: 9,
        name: 'Horizon',
        brand: "Mercedes",
        carType: "AMG A "
    },
    {
        id: 10,
        name: 'Nova',
        brand: "Honda",
        carType: "Civic "
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

export function deleteById(carId: number): Promise<any> {

    const carToRemove = cars.find(car => car.id === carId);
    if (!carToRemove) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject();
            }, 1500);
        })
    }

    cars = cars.filter(car => car.id !== carId);

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(carToRemove)
        }, 1500);
    })
}