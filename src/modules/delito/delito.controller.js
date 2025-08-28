import {

    listarDelitosDB,
    agregarDelitoDB,
    editarDelitoDB,

} from './delito.model.js';

export async function listarDelitos(req, res) {

    try {

        const delito = await listarDelitosDB();

        res.status(200).send({

            status: "OK",
            data: delito,

        });
        
    } catch (error) {

        res.status(500).send({

            status: "Error",
            message: error.message,

        });
        
    }
    
}

export async function agregarDelito(req, res) {

    try {

        let data = req.body;

        const resultado = await agregarDelitoDB(data);

        res.status(200).send({

            status: "OK",
            data: resultado,

        });
        
    } catch (error) {

        res.status(500).send({

            status: "Error",
            message: error.message,

        });
        
    }
    
}

export async function editarDelito(req, res) {

    try {

        let id = req.params.idDelito;
        let data = req.body;

        const resultado = await editarDelitoDB(id, data);

        res.status(200).send({

            status: "OK",
            data: resultado,

        });
        
    } catch (error) {

        res.status(500).send({

            status: "Error",
            message: error.message,

        });
        
    }
    
}