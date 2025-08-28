import conexion from "../../config/conexion.js";

export async function listarRolesDB() {
        
    const [resultado] = await conexion.query("SELECT * FROM rol");

    return resultado;
    
}

export async function agregarRolDB(data) {

    const [resultado] = await conexion.query("INSERT INTO rol SET ?", [data]);

    return resultado;
    
}

export async function editarRolDB(id, data) {

    const [resultado] = await conexion.query("UPDATE rol SET ? WHERE idRol = ?", [data, id]);

    return resultado;
    
}

export async function eliminarRolDB(id, data) {

    const [resultado] = await conexion.query("UPDATE rol SET ? WHERE idRol = ?", [data, id]);

    return resultado;
    
}