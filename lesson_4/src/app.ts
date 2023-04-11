import express from 'express';
import { users } from './users';

const app = express();

console.log(users);

app.get('/', (req, res) => {
    res.end();
});

app.listen(5500, () => {
    console.log('Server is started!');
});
