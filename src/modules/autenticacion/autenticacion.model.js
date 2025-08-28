import conexion from '../../config/conexion.js';
import bcrypt from 'bcryptjs';

export async function validarInformacionDB(data) {

    let correo = data.correo;
    let contraseña = data.contrasena;

    const [consultaVerificacion] = await conexion.query("SELECT * FROM usuario WHERE correo = ?", [correo]);
    let contraseñaBD = consultaVerificacion[0].contrasena;
    if (consultaVerificacion.length > 0)
    {
        
         const confirmacion = bcrypt.compareSync(contraseña, consultaVerificacion[0].contrasena);

        if(confirmacion)
        {
            return consultaVerificacion;
        }else{
            throw new Error("La contraseña es incorrecta!");
        }

    }else{
        throw new Error("El correo ingresado no existe!");
    }
    
}