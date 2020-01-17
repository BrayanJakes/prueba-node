import path from 'path';
import csvToJson from 'csvtojson';

export const leerCsv = () => csvToJson().fromFile(path.join(__dirname + '/archivo.csv'))
    // .then((data: Comercion[]) => {
    //     datos = data;
    // });







// export const leerCsv = fs.readFile(path.join(__dirname + '/archivo.csv'), {encoding: 'utf-8'} ,(err, data) => {
//     if(err){
//         console.log(err);
//     }
//     console.log('dasstso', data);
// });