const mongoose = require('../db');

const VotoSchema = new mongoose.Schema({
    idPauta: {
        type: String,
        require: true
    },
    
    idAssociado: {
        type: String,
        require: true
    },
    
    escolha: {
        type: Boolean,
        require: true
    }

});

const Voto = mongoose.model('Voto', VotoSchema);
module.exports = Voto;