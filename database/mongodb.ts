import mongoose from 'mongoose';


const database = mongoose.connect('mongodb://localhost:27017/node-prueba',
                        {useNewUrlParser: true,
                         useUnifiedTopology: true})
                    .then(() => console.log('Db Conectado'))
                    .catch(err => console.log(err));

export default database;