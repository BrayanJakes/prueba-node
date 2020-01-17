"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const csvtojson_1 = __importDefault(require("csvtojson"));
exports.leerCsv = () => csvtojson_1.default().fromFile(path_1.default.join(__dirname + '/archivo.csv'));
// .then((data: Comercion[]) => {
//     datos = data;
// });
// export const leerCsv = fs.readFile(path.join(__dirname + '/archivo.csv'), {encoding: 'utf-8'} ,(err, data) => {
//     if(err){
//         console.log(err);
//     }
//     console.log('dasstso', data);
// });
