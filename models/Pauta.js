const mongoose = require('../db');

const PautaSchema = new mongoose.Schema({
    descricao: {
        type: String,
        require: true
    },
    
    aberta: {
        type: Boolean,
        require: false
    },
    
    resultado: {
        type: Boolean,
        require: false
    }

});

const Pauta = mongoose.model('Pauta', PautaSchema);
module.exports = Pauta;