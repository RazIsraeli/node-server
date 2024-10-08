import express, { Request, Response } from 'express';
import cors from 'cors';
import path from 'path';
import SSEService from './services/sse.service';

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

export const sseService = new SSEService();
app.use('/sse', sseService.app);


import carsRouter from './routes/cars.routes';
import usersRouter from './routes/users.routes';

app.use('/api/cars', carsRouter);
app.use('/api/users', usersRouter);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello from Express! Our cars and users apis are available for you at "api/cars" and "api/users"');
});

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});