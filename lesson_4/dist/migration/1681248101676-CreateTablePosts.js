"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTablePosts1681248101676 = void 0;
const typeorm_1 = require("typeorm");
class CreateTablePosts1681248101676 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'Posts',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'title',
                    type: 'varchar',
                    width: 250,
                    isUnique: true,
                    isNullable: false,
                },
            ],
        }), true);
    }
    async down(queryRunner) {
        await queryRunner.dropTable('Posts', true);
    }
}
exports.CreateTablePosts1681248101676 = CreateTablePosts1681248101676;
//# sourceMappingURL=1681248101676-CreateTablePosts.js.map