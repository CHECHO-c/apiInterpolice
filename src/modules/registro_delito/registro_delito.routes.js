import express from 'express';
import {

    listarRegistrosDelitos,
    agregarRegistroDelito,
    editarRegistroDelito,

} from './registro_delito.controller.js';

const router = express.Router();

import { verificarToken } from '../helpers/administrarToken.js';

router.get("/traerRegistroDelitos",verificarToken,  listarRegistrosDelitos);
router.post("/agregarRegistroDelito",verificarToken,  agregarRegistroDelito);
router.put("/editarRegistroDelito/:idRegistroDelito",verificarToken,  editarRegistroDelito);

export default router;