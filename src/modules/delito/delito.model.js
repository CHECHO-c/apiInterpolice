import conexion from "../../config/conexion.js";

export async function listarDelitosDB() {

    const [resultado] = await conexion.query("SELECT * FROM delito");

    return resultado;
    
}

export async function agregarDelitoDB(data) {

    const [resultado] = await conexion.query("INSERT INTO delito SET ? ", [data]);

    return resultado;
    
}

export async function editarDelitoDB(id, data) {

    const [resultado] = await conexion.query("UPDATE delito SET ? WHERE idDelito", [data, id]);

    return resultado;
    
}