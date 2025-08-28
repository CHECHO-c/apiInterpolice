import {

    listarRolesDB,
    agregarRolDB,
    editarRolDB,
    eliminarRolDB,

} from './rol.model.js';

export async function listarRoles(req, res) {

    try {

        const rol = await listarRolesDB();

        res.status(200).send({

            status: "OK",
            data: rol,

        });
        
    } catch (error) {

        res.status(500).send({

            status: "Error",
            message: error.message

        });
        
    }
    
}

export async function agregarRol(req, res) {

    try {

        let data = req.body;

        const resultado = await agregarRolDB(data);

        res.status(200).send({

            status: "OK",
            data: resultado,

        });

        
    } catch (error) {

        res.status(500).send({

            status: "Error",
            message: error.message

        });
        
    }
    
}

export async function editarRol(req, res) {

    try {

        let id = req.params.idRol;
        let data = req.body;

        const resultado = await editarRolDB(id, data);

        res.status(200).send({

            status: "OK",
            data: resultado,

        });
        
    } catch (error) {

        res.status(500).send({

            status: "Error",
            message: error.message

        });
        
    }
    
}

export async function eliminarRol(req, res) {

    try {

        let id = req.params.idRol;
        let data = req.body;

        const resultado = await eliminarRolDB(id, data);

        res.status(200).send({

            status: "OK",
            data: resultado,

        });
        
    } catch (error) {

        res.status(500).send({

            status: "Error",
            message: error.message

        });
        
    }
    
}