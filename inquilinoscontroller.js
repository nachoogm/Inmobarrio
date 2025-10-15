const { poolPromise } = require('../config/db');

const getInquilinos = async (req, res) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request().query('SELECT * FROM Inquilinos');
        res.json(result.recordset);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al obtener inquilinos');
    }
};

module.exports = { getInquilinos };