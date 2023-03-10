"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('node', 'root', '12345', {
    host: 'localhost',
    dialect: 'mysql',
    // logging:false Es para no ver los comando sql en consola, pero como si quiero verlos lo dejo
});
exports.default = db;
//# sourceMappingURL=connection.js.map