import express from 'express';
import {

    listarRegistrosDelitos,
    agregarRegistroDelito,
    editarRegistroDelito,

} from './registro_delito.controller.js';

const router = express.Router();

import { autenticacionMidleeware } from '../helpers/administrarToken.js';

router.get("/traerRegistroDelitos",autenticacionMidleeware,  listarRegistrosDelitos);
router.post("/agregarRegistroDelito",autenticacionMidleeware,  agregarRegistroDelito);
router.put("/editarRegistroDelito/:idRegistroDelito",autenticacionMidleeware,  editarRegistroDelito);

export default router;