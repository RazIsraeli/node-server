import express, { Request, Response } from 'express';
import cors from 'cors';
import path from 'path';

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'public')))
} else {
    const corsOptions = {
        origin: ['http://127.0.0.1:4200', 'http://localhost:4200'],
        credentials: true
    }
    app.use(cors(corsOptions))
}

import carsRouter from './routers/cars.router'
import usersRouter from './routers/users.router'

app.use('/api/cars', carsRouter);
app.use('/api/users', usersRouter);

app.get('/', (rea: Request, res: Response) => {
    res.send('Hello from Express! Our cars and users apis are available for you at "api/cars" and "api/users"');
});

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});