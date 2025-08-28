import jwt from 'jsonwebtoken';

export function generarToken(payload, vida) {

    const options = {
        expiresIn: vida
    }

    return jwt.sign(payload, process.env.SALT, options);
    
}

export function autenticacionMidleeware(req, res, next) {

    try {
        
        // token valido  desde la peticion  request

        const header = req.headers.authorization;
        const token = header.startsWith('Bearer ') ? header.slice(7) : null; 
        console.log(token);
        //validar el token

        if(!token){
            throw new Error('No tienes un token valido para acceder a este endpoint');
        }

        // comparar el token del request con el token generado en el login

        const tokenOK = jwt.verify(token, process.env.SALT);
        console.log(tokenOK);

        next(); 


    } catch (error) {
        
        res.status(401).send({

            status: "Error",
            message: "No estas autorizado "+ error

        })

    }
    
}