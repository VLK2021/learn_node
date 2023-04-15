// 1)Повторіть всі ендпоінти як в мене
// 2)Створіть міграцію для таблиці comments, яка буде мати такі поля
// (id, text, authorId, postId, like, dislike, createdAt,deletedAt),
// відповідно звязок з таблицею юзерс і постс
// 3)Створіть ендпоінт get /posts/userId - який буде виводити пости якогось юзера який їх створив
// 4)update /posts/userId можна оновити текст про пост
// 5)get comments/userId вивести коментарі які належать юзеру який їх написав і пости в яких вони
// написані (якщо через квері почитаєте як там зробити мulti select)
// *6) update /comments/action написати ендпоінт який буде приймати в body commentId,
// action(like, dislike) і оновлювати в бд інформацію про кількість лайків і дизлайків в коментарі

import 'reflect-metadata';
import express, { Request, Response } from 'express';
import { createConnection, getManager } from 'typeorm';

import { User } from './entity/user';

const app = express();
app.use(express.json());
app.use(express.urlencoded());

app.get('/users', async (req: Request, res: Response) => {
    const users = await getManager().getRepository(User).find({ relations: ['posts'] });
    res.json(users);
});

// with query
// app.get('/users', async (req: Request, res: Response) => {
//     const users = await getManager().getRepository(User)
//         .createQueryBuilder('user')
//         .leftJoin('posts', 'posts', 'posts.userId = user.id')
//         .where('posts.title = "test"')
//         .getMany();
//     res.json(users);
// });

// app.get('/users', async (req: Request, res: Response) => {
//     const users = await getManager().getRepository(User)
//         .createQueryBuilder('user')
//         .where('user.firstName = "vova"')
//         .getOne();
//     res.json(users);
// });

// app.get('/users', async (req: Request, res: Response) => {
//     const users = await getManager().getRepository(User).findOne({
//         where: {
//             firstName: 'Valya',
//         },
//     });
//     res.json(users);
// });

app.post('/users', async (req: Request, res: Response) => {
    const createdUser = await getManager().getRepository(User).save(req.body);
    res.json(createdUser);
});

app.put('/users/:id', async (req, res) => {
    const { password, email } = req.body;
    const createdUser = await getManager()
        .getRepository(User)
        .update({ id: Number(req.params.id) }, {
            password,
            email,
        });
    res.json(createdUser);
});

// app.delete('/users/:id', async (req, res) => {
//     console.log(req.body);
//     const deletedUser = await getManager()
//         .getRepository(User)
//         .delete({ id: Number(req.params.id) });
//     res.json(deletedUser);
// });

app.delete('/users/:id', async (req, res) => {
    const deletedUser = await getManager()
        .getRepository(User)
        .softDelete({ id: Number(req.params.id) });
    res.json(deletedUser);
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
