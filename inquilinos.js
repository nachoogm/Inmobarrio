const express = require('express');
const router = express.Router();
const { getInquilinos } = require('../controllers/inquilinosController');

// GET todos los inquilinos
router.get('/', getInquilinos);

module.exports = router;