const {gestion_model} = require('../models');


getAllGestion = (req, res) => {
    gestion_model.find().exec((error, gestion) => {
        if(error) return res.status(500).json({error: true, mensaje: error});
        res.json({gestion});
    })
}

addGestion = (req, res) => {
    const gestion_new = new gestion_model(req.body);
    gestion_new.save((error, gestion) => {
        if(error) return res.status(500).json({error:true, mensaje: error})
        res.json({mensaje: req.body.description + " agregado satisfactoriamente"})
    })
}

deleteGestion  = async (req, res) => {
    const gestion_delete = await gestion_model.findByIdAndDelete({_id: req.params.id})

    try{
        if(gestion_delete) return res.json({mensaje: gestion_delete.nameu + " eliminado correctamente"});
        else return res.status(500).json({error: true, mensaje: "Falla al eliminar"});
    }catch(error){
        return res.staus(500).json({error:true, mensaje: error})
    }
}

updateGestion = async (req, res) => {
    try{
        const gestion_update = await gestion_model.findByIdAndUpdate({_id: req.body._id}, req.body, {useFindAndModify: false});
        if(gestion_update) return res.json({mensaje: "Producto actualizado correctamente"});
        else return res.status(400).json({error: true, mensaje: req.body.description + "Falla al actualizar"})
    }catch(error){
        if(error) return res.status(500).json({error: true, mensaje: error});
    }
}

module.exports = Object.freeze({
    getAllGestion,
    addGestion,
    deleteGestion,
    updateGestion
})