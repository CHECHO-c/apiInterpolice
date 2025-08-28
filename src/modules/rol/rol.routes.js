import express from 'express';
import {

    listarRoles,
    agregarRol,
    editarRol,
    eliminarRol,

} from './rol.controller.js';

import { verificarToken } from '../helpers/administrarToken.js';
const router = express.Router();

router.get("/traerRoles",verificarToken,   listarRoles);
router.post("/agregarRol", verificarToken, agregarRol);
router.put("/editarRol/:idRol", verificarToken, editarRol);
router.delete("/eliminarRol/:idRol",verificarToken,  eliminarRol);

export default router;