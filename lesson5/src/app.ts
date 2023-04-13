import 'reflect-metadata';
import express, { Request, Response } from 'express';
import { createConnection, getManager } from 'typeorm';

import { User } from './entity/user';

const app = express();

app.get('/users', async (req: Request, res: Response) => {
    const users = await getManager().getRepository(User).find();
    console.log(users);
    res.json(users);
});

app.listen(5500, async () => {
    console.log('Server is started!L5');
    try {
        const connection = await createConnection();
        if (connection) {
            console.log('Database connection');
        }
    } catch (err) {
        if (err) console.log(err);
    }
});
