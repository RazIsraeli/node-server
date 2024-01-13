const users = [
    {
        id: 0,
        firstName: 'Cristiano',
        lastName: 'Ronaldo',
        userName: 'CR7'
    },
    {
        id: 1,
        firstName: 'Lionel',
        lastName: 'Messi',
        userName: 'LM10'
    },
    {
        id: 2,
        firstName: 'Victor',
        lastName: 'Boniface',
        userName: 'Bonfilius'
    },
    {
        id: 3,
        firstName: 'Yasin',
        lastName: 'Trainer',
        userName: 'Yasir!'
    },
    {
        id: 4,
        firstName: 'Yasin',
        lastName: 'Trainer',
        userName: 'Spectra'
    },
    {
        id: 5,
        firstName: 'Yasin',
        lastName: 'Trainer',
        userName: 'Emberheart'
    },
    {
        id: 6,
        firstName: 'Yasin',
        lastName: 'Trainer',
        userName: 'Zephyr Whisper'
    },
    {
        id: 7,
        firstName: 'Yasin',
        lastName: 'Trainer',
        userName: 'Chronos Shift'
    },
    {
        id: 8,
        firstName: 'Yasin',
        lastName: 'Trainer',
        userName: 'Serpent\'s Eye'
    },
    {
        id: 9,
        firstName: 'Yasin',
        lastName: 'Trainer',
        userName: 'Atlas Pulse'
    },
    {
        id: 10,
        firstName: 'Yasin',
        lastName: 'Trainer',
        userName: 'Starborn'
    },
]

export function query(): Promise<any[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(users);
        }, 1500);
    })
}

export function getById(userId: number): Promise<any> {
    const userToDisplay = users.find(user => user.id === userId);
    if (!userToDisplay) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject();
            }, 1500);
        })
    }

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(userToDisplay);
        }, 1500);
    })
}