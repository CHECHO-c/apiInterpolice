import express from 'express';
import multer from 'multer';
import {

    ListarCiudadanos,
    agregarCiudadano, 
    editarCiudadano,
    eliminarCiudadano,
    subirImagen,

} from './ciudadano.controller.js';

const almacenamiento = multer.diskStorage({

  destination: (req, file, cb)=>{

    cb(null, './public/img/ciudadanos');

  },
  filename: (req, file, cb)=>{

    cb(null, "ciudadano-" + Date.now() + file.originalname);

  },

});

const subir = multer({ storage:almacenamiento });

const router = express.Router();

router.get("/traerCiudadanos", ListarCiudadanos);
router.post("/agregarCiudadano", agregarCiudadano);
router.put("/editarCiudadano/:codigo", editarCiudadano);
router.put("/eliminarCiudadano/:codigo", eliminarCiudadano);
router.put("/subirImagen/:codigo", [subir.single('file0')], subirImagen);

export default router;