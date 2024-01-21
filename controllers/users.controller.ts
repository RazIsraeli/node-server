import { Request, Response } from 'express';
import { getById, query } from '../services/users.service';
import { sseService } from '../server';

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await query();
        res.json(users);

        const sseUsers = {
            type: 'users',
            ...users
        }

        sseService.sendMessageToAll(sseUsers);

    } catch (error) {
        res.status(500).json('Could not find users');
    }
}

export const getUserById = async (req: Request, res: Response) => {
    const userId = Number(req.params.id);

    try {
        const user = await getById(userId);
        res.json(user);

        const sseUser = {
            type: 'user',
            ...user
        }

        sseService.sendMessageToAll(sseUser);
    } catch (error) {
        res.status(500).json(`Could not find user with id: ${userId}`);
    }
}