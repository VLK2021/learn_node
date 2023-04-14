"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const user_1 = require("./entity/user");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded());
app.get('/users', async (req, res) => {
    const users = await (0, typeorm_1.getManager)().getRepository(user_1.User).find({ relations: ['posts'] });
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
app.post('/users', async (req, res) => {
    const createdUser = await (0, typeorm_1.getManager)().getRepository(user_1.User).save(req.body);
    res.json(createdUser);
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
app.delete('/users/:id', async (req, res) => {
    console.log(req.body);
    const deletedUser = await (0, typeorm_1.getManager)()
        .getRepository(user_1.User)
        .delete({ id: Number(req.params.id) });
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