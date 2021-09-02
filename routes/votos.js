const express = require('express');
const router = express.Router();
const Voto = require('../models/Voto')

router.get('/', async (req, res) => {
    try {
        const votos = await Voto.find({});
        return res.send({ votos })
    } catch {
        return res.status(400).send({ error: 'Error' })
    }
});

router.post('/register', async (req, res) => {
    try {
        const voto = await Voto.create(req.body);
        return res.send({ voto })
    } catch (err) {
        return res.status(400).send({ error: 'Error' })
    }
});

module.exports = router;