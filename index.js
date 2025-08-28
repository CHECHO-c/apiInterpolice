import express from 'express';
import dotenv from  'dotenv';
import cors from 'cors';
import ciudadano from './src/modules/ciudadano/ciudadano.routes.js';
import usuario from './src/modules/usuario/usuario.routes.js';
import autenticarse from './src/modules/autenticacion/autenticacion.routes.js';
import rol from './src/modules/rol/rol.routes.js';
import delito from './src/modules/delito/delito.routes.js';
import registro_delito from './src/modules/registro_delito/registro_delito.routes.js';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
dotenv.config();

// se globaliza la carpeta donde se guardan las imagenes de los qr
app.use('/qrcodes', express.static(__dirname + '/qrcode'));
app.use('/img', express.static(__dirname + 'img'));
app.use(express.json());
app.use(cors());

app.use("/ciudadano", ciudadano);
app.use("/usuario", usuario);
app.use("/autenticarse", autenticarse);
app.use("/rol", rol);
app.use("/delito", delito);
app.use("/registroDelito", registro_delito);

// encendemos la api asignandole un puerto
let puerto = process.env.APP_PORT || 4001
app.listen(puerto,()=>{
    console.log(`PUERTO: ${puerto}`);
}); 
