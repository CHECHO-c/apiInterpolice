import express from 'express';
import {

    ListarUsuarios,
    agregarUsuario,
    editarUsuario,
    eliminarUsuario,

} from './usuario.controller.js';

import { verificarToken } from '../helpers/administrarToken.js';

const router = express.Router();

 router.get("/traerUsuarios", verificarToken ,ListarUsuarios);
router.post("/agregarUsuario", verificarToken, agregarUsuario);
router.put("/editarUsuario/:idUsuario", verificarToken ,editarUsuario);
router.delete("/eliminarUsuario/:idUsuario",verificarToken,eliminarUsuario);

//Eliminar
export default router;