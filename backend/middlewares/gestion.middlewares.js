const {gestion_model} = require('../models');
const joi = require('@hapi/joi');

verifyTypes = (req, res, next) => {
    const gestion_joi = joi.object({
        _id: joi.optional(),
        nombreu: joi.string().required(),
        emaill: joi.string().required(),        
        rol: joi.string().required(),
        estado: joi.string().required()
        
    });

    const {error} = gestion_joi.validate(req.body);
    if(error) return res.status(400).json({error:true, mensaje: error.details[0].message});
    next()
}

verifyNombreu = (req, res, next) => {
    gestion_model.findOne({nombreu: req.body.barcode}).exec((error, gestion) => {
        if(error) return res.status(500).json({error: true, mensaje: error});
        if(gestion) return res.status(400).json({error:true, mensaje: gestion.nombreu + " está registrado con el rol " + gestion.rol});
        next();
    });
}

module.exports = Object.freeze({
    verifyTypes,
    verifyNombreu
});