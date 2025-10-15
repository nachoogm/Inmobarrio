const express = require('express');
const router = express.Router();
const { getPropiedades } = require('../controllers/propiedadesController');

router.get('/', getPropiedades);

module.exports = router;