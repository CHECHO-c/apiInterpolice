import express from 'express';
import {

    listarDelitos,
    agregarDelito,
    editarDelito,

} from './delito.controller.js';


import { verificarToken } from '../helpers/administrarToken.js';
const router = express.Router();

router.get("/traerDelitos",  verificarToken, listarDelitos);
router.post("/agregarDelito", verificarToken, agregarDelito);
router.put("/editarDelito/:idDelito", verificarToken, editarDelito);

export default router;