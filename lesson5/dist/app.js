"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const app = (0, express_1.default)();
// app.get('/users', (req: Request, res: Response) => {
//     // await getManager().getRepository();
//     res.end();
// });
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