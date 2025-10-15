const express = require('express');
const router = express.Router();
const { getPagos } = require('../controllers/pagosController');

// GET todos los pagos
router.get('/', getPagos);

module.exports = router;