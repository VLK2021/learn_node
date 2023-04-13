import 'reflect-metadata';
import express from 'express';
import { createConnection } from 'typeorm';

const app = express();

// app.get('/users', (req: Request, res: Response) => {
//     // await getManager().getRepository();
//     res.end();
// });

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
