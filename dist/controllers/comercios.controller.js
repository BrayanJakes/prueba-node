"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const comercio_model_1 = __importDefault(require("../models/comercio.model"));
exports.guardarDatosDB = (datos) => __awaiter(void 0, void 0, void 0, function* () {
    for (const dato of datos) {
        yield comercio_model_1.default.findOne({ ID: dato.ID }, (err, resp) => {
            if (err) {
                return console.log(err);
            }
            if (!resp) {
                let data = new comercio_model_1.default(dato);
                data.save();
                return;
            }
            else {
                return console.log('Ya existe datos con el ID', dato.ID);
            }
        });
    }
});
