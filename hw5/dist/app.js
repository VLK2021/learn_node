"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const user_1 = require("./entity/user");
const post_1 = require("./entity/post");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded());
// app.get('/users', async (req: Request, res: Response) => {
//     const users = await getManager().getRepository(User).find({ relations: ['posts'] });
//     res.json(users);
// });
app.get('/posts', async (req, res) => {
    const posts = await (0, typeorm_1.getManager)().getRepository(post_1.Post).find();
    res.json(posts);
});
app.get('/posts/:userId', async (req, res) => {
    const postsUser = await (0, typeorm_1.getManager)().getRepository(post_1.Post)
        .createQueryBuilder('post')
        .where(`post.userId = '${req.params.userId}'`)
        .leftJoin('User', 'user', 'user.id = post.userId')
        .getMany();
    res.json(postsUser);
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
app.post('/users', async (req, res) => {
    const createdUser = await (0, typeorm_1.getManager)().getRepository(user_1.User).save(req.body);
    res.json(createdUser);
});
//= ==================================================================================
// app.put('/posts/:userId', async (req: Request<{userId: string}>, res: Response) => {
//     const { title, text } = req.body;
//     const createdPost = await getManager().getRepository(Post)
//         .createQueryBuilder('post')
//         .leftJoin('User', 'user', 'user.id = post.userId')
//         .update({ 'post.userId' = `${req.params.userId}` }, { title, text });
//     res.json(createdPost);
// });
// app.put('/posts/:userId', async (req: Request<{userId: string}>, res: Response) => {
//     const { title, text } = req.body;
//     const updatedPost = await getManager().getRepository(Post)
//         .createQueryBuilder('post')
//         .leftJoin('User', 'user', 'user.id = post.userId')
//         .update(post)
//         .set({ userId: +req.params.userId, title, text })
//         .execute();
//     res.json(updatedPost);
// });
//= ==============`post.userId = '${req.params.userId}'=========================================================================================
app.put('/posts/:postId', async (req, res) => {
    const { title, text } = req.body;
    const updatePost = await (0, typeorm_1.getManager)()
        .getRepository(post_1.Post)
        .update({ id: Number(req.params.postId) }, {
        title,
        text,
    });
    res.json(updatePost);
});
app.put('/users/:id', async (req, res) => {
    const { password, email } = req.body;
    const createdUser = await (0, typeorm_1.getManager)()
        .getRepository(user_1.User)
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
    const deletedUser = await (0, typeorm_1.getManager)()
        .getRepository(user_1.User)
        .softDelete({ id: Number(req.params.id) });
    res.json(deletedUser);
});
app.listen(5500, async () => {
    console.log('Server is started!L5');
    try {
        const connection = await (0, typeorm_1.createConnection)();
        if (connection) {
            console.log('Database connection');
        }
    }
    catch (err) {
        if (err)
            console.log(err);
    }
});
//# sourceMappingURL=app.js.map