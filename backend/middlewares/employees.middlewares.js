const {employees_model} = require('../models');
const joi = require('@hapi/joi');

verifyTy = (req, res, next) => {
    const employees_joi = joi.object({
        _id: joi.optional(),
        identification: joi.number(),
        producto: joi.string().required(),
       name: joi.string().required(),
        surname: joi.string().required(),
        rol: joi.string().required(),
       email: joi.string().required(),
       cedulacl: joi.string().required(),
       nombrecl: joi.string().required(),
       nombrev: joi.string().required(),
       estado: joi.string().required()
    });

    const {error} = employees_joi.validate(req.body);
    if(error) return res.status(400).json({error:true, mensaje: error.details[0].message});
    next()
}

verifyIdentificacion = (req, res, next) => {
    employees_model.findOne({identification: req.body.identification}).exec((error, employees) => {
        if(error) return res.status(500).json({error: true, mensaje: error});
        if(employees) return res.status(400).json({error:true, mensaje: employees.name + " está registrado con  el número de cedula"  + employees.identification});
        next();
    });
}

module.exports = Object.freeze({
    verifyTy,
    verifyIdentificacion
});