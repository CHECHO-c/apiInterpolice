import express from 'express';
import {

    listarRoles,
    agregarRol,
    editarRol,
    eliminarRol,

} from './rol.controller.js';

const router = express.Router();

router.get("/traerRoles", listarRoles);
router.post("/agregarRol", agregarRol);
router.put("/editarRol/:idRol", editarRol);
router.delete("/eliminarRol/:idRol", eliminarRol);

export default router;