const Cita = require('../models/citasSchema')


const citasGET = async (req, res)=>{
  //  const citas = await Cita.find()
    res.json({
        mensaje: 'Tomando datos '
    }) 
}

const citasPOST = async (req, res)=>{
    const body = req.body
          cita = new Cita(body)
          console.log(cita);
    await cita.save();
    res.json({
        mensaje: 'Enviando datos',
        cita
    }) 
}

const citasPUT = (req, res)=>{
    const {id} = req.params;

    res.json({
        mensaje: 'Editando datos',
        id
    }) 
}

const citasDELETE = async (req, res)=>{
    const {id} = req.params;
    // const eliminarCita = await Cita.findByIdAndDelete(id)
    res.json({
        mensaje: 'Eliminando datos ',
        id
    }) 
}

module.exports ={
    citasGET,
    citasPOST,
    citasPUT,
    citasDELETE
}
