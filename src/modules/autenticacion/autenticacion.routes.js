import express from 'express';
import {

    validarInformacion,

} from './autenticacion.controller.js';

const router = express.Router();

router.get("/login", validarInformacion);

export default router;