const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const rotaPautas = require('./routes/pautas');
app.use('/pautas', rotaPautas);

const rotaAssociados = require('./routes/associados');
app.use('/associados', rotaAssociados);

const rotaVotos = require('./routes/votos');
app.use('/votos', rotaVotos);

app.use((req, res, next) => {
    res.status(200).send({
        mensagem: 'Server iniciado'
    });
});

module.exports = app;