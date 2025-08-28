import {

    listarRegistrosDelitosDB,
    agregarRegistroDelitoDB,
    editarRegistroDelitoDB,

} from './registro_delito.model.js';

export async function listarRegistrosDelitos(req, res) {

    try {

        const registro_delito = await listarRegistrosDelitosDB();

        res.status(200).send({

            status: "OK",
            data: registro_delito,

        });
        
    } catch (error) {

        res.status(500).send({

            status: "Error",
            message: error.message,

        });
        
    }
    
}

export async function agregarRegistroDelito(req, res) {

    try {

        let data = req.body;

        const resultado = await agregarRegistroDelitoDB(data);

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

export async function editarRegistroDelito(req, res) {

    try {

        let id = req.params.idRegistroDelito;
        let data = req.body;

        const resultado = await editarRegistroDelitoDB(id, data);

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