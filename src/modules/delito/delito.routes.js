import express from 'express';
import {

    listarDelitos,
    agregarDelito,
    editarDelito,

} from './delito.controller.js';

const router = express.Router();

router.get("/traerDelitos", listarDelitos);
router.post("/agregarDelito", agregarDelito);
router.put("/editarDelito/:idDelito", editarDelito);

export default router;