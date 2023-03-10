
import { Router } from "express";
import { deleteUsuario, getUsuario, getUsuarios, postUsuario, putUsuario } from "../controllers/usuarios";

const routerUsuario=Router()

routerUsuario.get('/',getUsuarios)


routerUsuario.get('/:id',getUsuario)


routerUsuario.post('/',postUsuario)


routerUsuario.put('/:id',putUsuario)


routerUsuario.delete('/:id',deleteUsuario)


export default routerUsuario