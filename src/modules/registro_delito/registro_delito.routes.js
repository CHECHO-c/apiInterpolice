import express from 'express';
import {

    listarRegistrosDelitos,
    agregarRegistroDelito,
    editarRegistroDelito,

} from './registro_delito.controller.js';

const router = express.Router();

router.get("/traerRegistroDelitos", listarRegistrosDelitos);
router.post("/agregarRegistroDelito", agregarRegistroDelito);
router.put("/editarRegistroDelito/:idRegistroDelito", editarRegistroDelito);

export default router;