const express = require('express');
const router = express.Router();
const Associado = require('../models/Associado')

router.get('/', async (req, res) => {
    try {
        const associados = await Associado.find({});
        return res.send({ associados })
    } catch {
        return res.status(400).send({ error: 'Error' })
    }
});

router.post('/register', async (req, res) => {
    try {
        const associado = await Associado.create(req.body);
        return res.send({ associado })
    } catch (err) {
        return res.status(400).send({ error: 'Error' })
    }
});

module.exports = router;