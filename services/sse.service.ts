import express, { Request, Response } from 'express';

export default class SSEService {
    app = express();
    clients: Response[] = [];

    constructor() {
        this.app.get('/events', (req: Request, res: Response) => {
            res.writeHead(200, {
                'Content-Type': 'text/event-stream',
                'Cache-Control': 'no-cache',
                Connection: 'keep-alive'
            });

            const client = res;
            this.clients.push(client);

            console.log(`a client connection was made!`);

            client.on('close', () => {
                const clientIdx = this.clients.indexOf(res);
                this.clients.splice(clientIdx, 1);
            });
        });
    }

    sendMessageToAll(message: any) {
        this.clients.forEach((client) => {
            client.write(`data: ${JSON.stringify(message)}\n\n`);
        })
    }
}