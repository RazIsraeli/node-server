import { Request, Response } from 'express';

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
    }
]

export const getUsers = (req: Request, res: Response) => {
    res.json(users);
}

export const getUserById = (req: Request, res: Response) => {
    const userToDisplay = {
        id: 4,
        firstName: 'Yossi',
        lastName: 'Kettler',
        usernName: 'Josef'
    }
    res.json(userToDisplay);
}