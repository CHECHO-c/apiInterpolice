import conexion from "../../config/conexion.js";

export async function listarRegistrosDelitosDB() {

    const [resultado] = await conexion.query("SELECT * FROM registro_delito");

    return resultado;
    
}

export async function agregarRegistroDelitoDB(data) {

    const [resultado] = await conexion.query("INSERT INTO registro_delito SET ? ", [data]);

    return resultado;
    
}

export async function editarRegistroDelitoDB(id, data) {

    const [resultado] = await conexion.query("UPDATE registro_delito SET ? WHERE idRegistroDelito = ?", [data, id]);

    return resultado;
    
}
