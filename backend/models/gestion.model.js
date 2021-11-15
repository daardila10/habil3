const mongoose = require('mongoose');

const gestion_schema = new mongoose.Schema({
    nombreu: {
        type: String,
        required: true,
        min: 1
    },
    rol: {
        type: String,
        required: true,
        min: 1
    },
    emaill: {
        type: String,
        required: true,
        min: 1
    },
   estado: {
        type: String,
        required: true,
        min:1
    }
});

module.exports = mongoose.model('gestion', gestion_schema);