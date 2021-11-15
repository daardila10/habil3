const mongoose = require('mongoose');

const employees_schema = new mongoose.Schema({
    identification: {
        type: Number,
        required: true,
        min: 1
    },
    name: {
        type: String,
        required: true,
        min: 1
    },
    producto: {
        type: String,
        required: true,
        min: 1
    },
    surname: {
        type: String,
        required: true,
        min: 3
    },
    rol: {
        type: String,
        required: true,
        min: 3
    },
    email: {
        type: String,
        required: true,
        min: 1
    },
    cedulacl:{
        type:String,
        required:true,
        min:1
    },
    nombrecl:{
        type:String,
        required:true,
        min:1
    },
    nombrev:{
        type:String,
        required:true,
        min:1
    },
    estado:{
        type:String,
        required:true,
        min:1
    }
});

module.exports = mongoose.model('employees', employees_schema);