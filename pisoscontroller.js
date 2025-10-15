const { poolPromise } = require('../config/db');

const getPisosConInquilinos = async (req, res) => {
    try {
        const pool = await poolPromise;

        const result = await pool.request().query(`
            SELECT 
                p.PropiedadID,
                p.Calle + ' ' + p.Numero AS Direccion,
                i.Nombre + ' ' + i.Apellido AS Inquilino,
                i.Email AS EmailInquilino,
                pag.Monto AS MontoPago,
                pag.EstadoPago
            FROM Propiedades p
            LEFT JOIN PropiedadInquilinos pi ON p.PropiedadID = pi.PropiedadID
            LEFT JOIN Inquilinos i ON pi.InquilinoID = i.InquilinoID
            LEFT JOIN Pagos pag ON pag.PropiedadID = p.PropiedadID AND pag.InquilinoID = i.InquilinoID
            ORDER BY p.PropiedadID, i.InquilinoID
        `);

        res.json(result.recordset);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al obtener pisos con inquilinos');
    }
};

module.exports = { getPisosConInquilinos };