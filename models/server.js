const express = require('express'),
      cors = require('cors'),
       {dbConnection}  = require('../database/conexion'),
      rutasCRUD = require('../routes/routes')

class Server {
    constructor(){
      //crear el servidor
      this.app = express()
      //puerto de la app
      this.port = process.env.PORT || 4000;
      //ConectarDB
      this.conectarDB()
      //Middlewares
      this.middleqwares()      
      //rutas de la aplicacion
      this.routes()
    }

    async conectarDB() {
       await  dbConnection();
    }

    middleqwares() {
        //CORS
        this.app.use(cors());

        // Lectura y parseo del body
        this.app.use( express.json());
    }

    routes() {
        // Definir la pagina principal
        this.app.use('/citas-crud', rutasCRUD );

    }

    listen() {
        // arrancar la app
        this.app.listen(this.port, () => {
            console.log(`el puerto del servidor es ${this.port}`);
        })
      
    }

}

module.exports= Server;