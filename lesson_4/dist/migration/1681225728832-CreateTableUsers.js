"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableUsers1681225728832 = void 0;
class CreateTableUsers1681225728832 {
    async up(queryRunner) {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS Users (
                id INT PRIMARY KEY AUTO_INCREMENT,
                firstName VARCHAR(250) NOT NULL,
                lastName VARCHAR(250) NOT NULL
            )
        `);
    }
    async down(queryRunner) {
    }
}
exports.CreateTableUsers1681225728832 = CreateTableUsers1681225728832;
//# sourceMappingURL=1681225728832-CreateTableUsers.js.map