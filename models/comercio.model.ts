import { Schema, model } from 'mongoose';


const comercioSchema: Schema = new Schema({

    'Latitud': {type: String},
    'Longitud': {type: String},
    'ID': {type: String},
    'Titulo': {type: String},
    'Anunciante': {type: String},
    'Descripcion': {type: String},
    'Reformado': {type: String},
    'Telefonos': {type: String},
    'Tipo': {type: String},
    'Precio': {type: String},
    'Precio por metro': {type: String},
    'Direccion': {type: String},
    'Provincia': {type: String},
    'Ciudad': {type: String},
    'Metros cuadrados': {type: String},
    'Habitaciones': {type: String},
    'Baños': {type: String},
    'Parking': {type: String},
    'Segunda mano': {type: String},
    'Armarios Empotrados': {type: String},
    'Construido en': {type: String},
    'Amueblado': {type: String},
    'Calefacción individual': {type: String},
    'Certificación energética': {type: String},
    'Planta': {type: String},
    'Exterior': {type: String},
    'Interior': {type: String},
    'Ascensor': {type: String},
    'Fecha': {type: String},
    'Calle': {type: String},
    'Barrio': {type: String},
    'Distrito': {type: String},
    'Terraza': {type: String},
    'Trastero': {type: String},
    'Cocina Equipada': {type: String},
    'Cocina equipada': {type: String},
    'Aire acondicionado': {type: String},
    'Piscina': {type: String},
    'Jardin': {type: String},
    'Metros cuadrados útiles': {type: String},
    'Apto para personas con movilidad reducida': {type: String},
    'Plantas': {type: String},
    'Se admiten mascotas': {type: String},
    'Balcón': {type: String}




});

export default model('comercio', comercioSchema);