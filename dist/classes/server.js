"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_csv_1 = require("../fs/fs.csv");
const mongodb_1 = __importDefault(require("../database/mongodb"));
const comercios_controller_1 = require("../controllers/comercios.controller");
class Server {
    constructor() {
        this.port = Number(process.env.PORT) || 3000;
        this.app = express_1.default();
        this.BasedeDato();
    }
    BasedeDato() {
        return mongodb_1.default;
    }
    leerArchivo() {
        return fs_csv_1.leerCsv().then((data) => this.guardarDatos(data));
    }
    guardarDatos(datos) {
        return comercios_controller_1.guardarDatosDB(datos);
    }
    start() {
        this.app.listen(this.port, () => console.log('Servidorr activo en el puerto', this.port));
    }
}
exports.default = Server;
