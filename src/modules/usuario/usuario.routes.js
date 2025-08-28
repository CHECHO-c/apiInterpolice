import express from 'express';
import {

    ListarUsuarios,
    agregarUsuario,
    editarUsuario,
    eliminarUsuario,

} from './usuario.controller.js';

import { autenticacionMidleeware } from '../helpers/administrarToken.js';

const router = express.Router();

 router.get("/traerUsuarios", autenticacionMidleeware ,ListarUsuarios);
router.post("/agregarUsuario", autenticacionMidleeware, agregarUsuario);
router.put("/editarUsuario/:idUsuario", autenticacionMidleeware ,editarUsuario);
router.delete("/eliminarUsuario/:idUsuario",autenticacionMidleeware,eliminarUsuario);

//Eliminar
export default router;