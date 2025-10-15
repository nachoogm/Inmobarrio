const { poolPromise, sql } = require('../config/db');

const getPropiedades = async (req, res) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request().query('SELECT * FROM Propiedades');
        res.json(result.recordset);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports = { getPropiedades };