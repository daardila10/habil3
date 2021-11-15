const {employees_model} = require('../models');


 getAllEmployees = (req, res) => {
    employees_model.find().exec((error, employees) => {
        if(error) return res.status(500).json({error: true, mensaje: error});
        res.json({employees});    })} 

addEmployees = (req, res) => {
    const employees_new = new employees_model(req.body);
    employees_new.save((error, employees) => {
        if(error) return res.status(500).json({error:true, mensaje: error})
        res.json({mensaje: req.body.description + " agregado satisfactoriamente"})
    })
}

deleteEmployees = async (req, res) => {
    const employees_delete = await employees_model.findByIdAndDelete({_id: req.params.id})

    try{
        if(employees_delete) return res.json({mensaje: employees_delete.name + " eliminado correctamente"});
        else return res.status(500).json({error: true, mensaje: "Falla al eliminar"});
    }catch(error){
        return res.staus(500).json({error:true, mensaje: error})
    }
}

updateEmployees = async (req, res) => {
    try{
        const product_update = await employees_model.findByIdAndUpdate({_id: req.body._id}, req.body, {useFindAndModify: false});
        if(product_update) return res.json({mensaje: "Información actualizada correctamente"});
        else return res.status(400).json({error: true, mensaje: req.body.description + "Falla al actualizar"})
    }catch(error){
        if(error) return res.status(500).json({error: true, mensaje: error});
    }
}

module.exports = Object.freeze({
    getAllEmployees,
    addEmployees,
    deleteEmployees,
    updateEmployees
})