const {Schema, model} = require('mongoose')

const CitaSchema = Schema({
    Paciente: {
        type: String,
        require: [true, 'El Paciente es obligatorio']
    },
    Fecha: {
        type: Date,
        require: [true, 'La Fecha es obligatorio']
    },
    Hora: {
        type: Date,
        require: [true, 'La Hora es obligatorio']
    },
    Diagnostico: {
        type: String,
        require: [true, 'El Diagnostico es obligatorio']
    }
})

module.exports = model('Cita', CitaSchema)