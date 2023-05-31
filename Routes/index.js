const express = require('express');
const router = express.Router();
const authMiddleware = require('../Middleware/auth');

router.get('/', authMiddleware, (req, res) =>{
    return res.send({message: 'Tudo ok com o método GET da raiz!'});
});

router.post('/', authMiddleware, (req, res) =>{
    return res.send({message: 'Tudo ok com o método POST da raiz!'});
});

module.exports = router;