"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarios_1 = require("../controllers/usuarios");
const routerUsuario = (0, express_1.Router)();
routerUsuario.get('/', usuarios_1.getUsuarios);
routerUsuario.get('/:id', usuarios_1.getUsuario);
routerUsuario.post('/', usuarios_1.postUsuario);
routerUsuario.put('/:id', usuarios_1.putUsuario);
routerUsuario.delete('/:id', usuarios_1.deleteUsuario);
exports.default = routerUsuario;
//# sourceMappingURL=usuario.js.map