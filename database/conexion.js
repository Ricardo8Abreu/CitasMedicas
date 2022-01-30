const mongoose = require('mongoose');

const dbConnection = async() => {
    console.log(process.env.MONGODB_CNN);
    try {

      await mongoose.connect(process.env.MONGODB_CNN, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true,
          useFindAndModify: false
      })
      console.log('Base de datos conectada');
    } 
    
    catch (error) {
        throw new Error('No se pudo conectar a la base de datos')
    }
}

module.exports = {dbConnection};
