import express from 'express';
import {

    listarRoles,
    agregarRol,
    editarRol,
    eliminarRol,

} from './rol.controller.js';

import { autenticacionMidleeware } from '../helpers/administrarToken.js';
const router = express.Router();

router.get("/traerRoles",autenticacionMidleeware,   listarRoles);
router.post("/agregarRol", autenticacionMidleeware, agregarRol);
router.put("/editarRol/:idRol", autenticacionMidleeware, editarRol);
router.delete("/eliminarRol/:idRol",autenticacionMidleeware,  eliminarRol);

export default router;