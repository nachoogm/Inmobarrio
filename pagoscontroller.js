    const { poolPromise } = require('../config/db');

const getPagos = async (req, res) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request().query(`
            SELECT 
                pag.PagoID,
                i.Nombre + ' ' + i.Apellido AS Inquilino,
                p.Calle + ' ' + p.Numero AS Piso,
                pag.Monto,
                pag.FechaPago,
                pag.MetodoPago,
                pag.EstadoPago
            FROM Pagos pag
            JOIN Inquilinos i ON pag.InquilinoID = i.InquilinoID
            JOIN Propiedades p ON pag.PropiedadID = p.PropiedadID
        `);
        res.json(result.recordset);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al obtener pagos');
    }
};

module.exports = { getPagos };