"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const database = mongoose_1.default.connect('mongodb://localhost:27017/node-prueba', { useNewUrlParser: true,
    useUnifiedTopology: true })
    .then(() => console.log('Db Conectado'))
    .catch(err => console.log(err));
exports.default = database;
