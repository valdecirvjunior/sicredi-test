const express = require('express');
const router = express.Router();
const Pauta = require('../models/Pauta')


router.get('/', async (req, res) => {
    try {
        const pautas = await Pauta.find({});
        return res.send({ pautas })
    } catch {
        return res.status(400).send({ error: 'Error' })
    }
});

router.post('/register', async (req, res) => {
    try {
        const pauta = await Pauta.create(req.body);
        return res.send({ pauta })
    } catch (err) {
        return res.status(400).send({ error: 'Error' })
    }
});

module.exports = router;