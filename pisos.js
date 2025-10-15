const express = require('express');
const router = express.Router();
const { getPisosConInquilinos } = require('../controllers/pisosController');

// GET pisos con inquilinos y pagos
router.get('/', getPisosConInquilinos);

module.exports = router;