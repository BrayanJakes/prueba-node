import comercionModel from '../models/comercio.model';
import { Comercion } from '../interfaces/comercion.interfas';


export const guardarDatosDB = async (datos: Comercion[]) => {

    for (const dato of datos) {

        await comercionModel.findOne({ID: dato.ID}, (err, resp) => {
            if(err){
                return console.log(err);
            }

            if(!resp){
                
                let data = new comercionModel(dato);
                data.save()
                return;
            }
            else {
                return console.log('Ya existe datos con el ID', dato.ID);
            }
        })

        
    }

}