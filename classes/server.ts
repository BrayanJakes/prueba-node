import express from 'express';
import { leerCsv } from '../fs/fs.csv';
import database from '../database/mongodb';
import { Comercion } from '../interfaces/comercion.interfas';
import { guardarDatosDB } from '../controllers/comercios.controller';



export default class Server{

    private app: express.Application;
    private port: number;

    constructor() {
        this.port = Number(process.env.PORT) || 3000;
        this.app = express();
        this.BasedeDato();
    }

    private BasedeDato() {
        return database
    }

    public leerArchivo() {

        return leerCsv().then((data: Comercion[]) => this.guardarDatos(data) )
        
    }

    private guardarDatos(datos: Comercion[]){
        return guardarDatosDB(datos)
    }


    public start() {
        this.app.listen(this.port, ()=> console.log('Servidorr activo en el puerto', this.port));
    }




}