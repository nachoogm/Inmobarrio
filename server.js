const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Rutas
const propiedadesRoutes = require('./routes/propiedades');
const inquilinosRoutes = require('./routes/inquilinos');
const pagosRoutes = require('./routes/pagos');
const pisosRoutes = require('./routes/pisos');

app.use('/propiedades', propiedadesRoutes);
app.use('/inquilinos', inquilinosRoutes);
app.use('/pagos', pagosRoutes);
app.use('/pisos', pisosRoutes);

app.listen(port, () => console.log(`Servidor escuchando en puerto ${port}`));



