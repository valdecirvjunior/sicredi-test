const mongoose = require('../db');

const AssociadoSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true
    },

});

const Associado = mongoose.model('Associado', AssociadoSchema);
module.exports = Associado;