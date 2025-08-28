import express from 'express';
import {

    ListarUsuarios,
    agregarUsuario,
    editarUsuario,
    eliminarUsuario,

} from './usuario.controller.js';

import { autenticacionMidleeware } from '../helpers/administrarToken.js';

const router = express.Router();

 router.get("/traerUsuarios", ListarUsuarios);
router.post("/agregarUsuario", agregarUsuario);
router.put("/editarUsuario/:idUsuario", editarUsuario);
router.put("/eliminarUsuario/:idUsuario",eliminarUsuario);

export default router;