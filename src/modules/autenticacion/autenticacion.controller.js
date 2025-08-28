import {

    validarInformacionDB,

} from './autenticacion.model.js';

import { generarToken } from '../helpers/administrarToken.js';

export async function validarInformacion(req, res) {

    try {
        
        let data = Object.keys(req.body || {}).length ? req.body : req.query;
        
        const usuario = await validarInformacionDB(data);

        if(usuario ){

            const token = generarToken(usuario[0], process.env.TOKEN_LIFE);

             res.status(200).send({
                status: "OK",
                data: usuario,
                token: token,
            });

        }

    } catch (error) {
        
        res.status(500).send({
            status: 'error',
            message: error.message
        });

    }
    
}
