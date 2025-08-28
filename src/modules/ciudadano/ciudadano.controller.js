import {

    ListarCiudadanosDB,
    agregarCiudadanoDB,
    editarCiudadanoDB,
    eliminarCiudadanoDB,
    actualizarImagenDB,

} from './ciudadano.model.js';

export async function ListarCiudadanos(req, res) {
    
    try {

        const ciudadano = await ListarCiudadanosDB();

         res.status(200).send({
            estado: "OK",
            data: ciudadano,
        });
        
    } catch (error) {
        
        res.send({
            estado: "Error",
            data: error.message
        })

    }

}

export async function agregarCiudadano(req, res) {
    
    try {
        
        let data = req.body;

        const resultado = await  agregarCiudadanoDB(data);

        res.status(200).send({
            estado: "OK",
            data: resultado,
        });


    } catch (error) {
        
         res.send({
            estado: "Error",
            data: error.message
        });

    }

}

export async function editarCiudadano(req, res) {

    try {

        let id = req.params.codigo;
        let data = req.body;

        const resultado = await editarCiudadanoDB(id, data);
        
        res.status(200).send({
            estado: "OK",
            data: resultado
        });

    } catch (error) {

        res.send({
            estado: "Error",
            data: error.message
        });
        
    }
    
}

export async function eliminarCiudadano(req, res) {

    try {

        let id = req.params.codigo;
        

        const resultado = await eliminarCiudadanoDB(id);

         res.status(200).send({
            estado: "OK",
            data: resultado
        });
        
    } catch (error) {

        res.send({
            estado: "Error",
            data: error.message
        });
        
    }
    
}

export async function subirImagen(req, res) {

    if(!req.file && !req.files){

        return res.status(404).send({
            status: "Error",
            message: "peticion es invaldia",
        });

    }

    // validamos la extension de archivo

    let archivo = req.file.originalname;
    let archivoSeparado = archivo.split(".");
    let extension = archivoSeparado[1];

    // comprobamos extension y actualizamos la DATABASE

    if(extension !== "png" && extension !== "jpg" && extension !== "PNG" && extension !== "JPG"){

        return res.status(400).send({
        status: "Error",
        message: "El formato de la imagen no es valida"

        });

    }else{

        // recibimos el parametro del id 

        let id = req.params.codigo;

        // recibimos la rutade la imagen 

        let rutaImagen = req.file.filename;

        console.log(rutaImagen);

        // actualizamos en la base de datos 

        let resultado = await actualizarImagenDB(id, rutaImagen);

        console.log(resultado);

        //enviamos mensajes

        return res.status(200).send({
            
            status: "Ok",
            message: resultado,

        });

    }

    
}

