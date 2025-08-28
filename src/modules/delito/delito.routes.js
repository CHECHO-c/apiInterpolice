import express from 'express';
import {

    listarDelitos,
    agregarDelito,
    editarDelito,

} from './delito.controller.js';


import { autenticacionMidleeware } from '../helpers/administrarToken.js';
const router = express.Router();

router.get("/traerDelitos",  autenticacionMidleeware, listarDelitos);
router.post("/agregarDelito", autenticacionMidleeware, agregarDelito);
router.put("/editarDelito/:idDelito", autenticacionMidleeware, editarDelito);

export default router;