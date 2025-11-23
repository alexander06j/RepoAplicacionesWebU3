const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());


// Conexión a MongoDB
mongoose.connect(process.env.DB_URI)
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.error('Error de conexión:', err));

// Importar rutas
const productRoutes = require('./routes/products');
const categoryRoutes = require('./routes/categories');

// Usar rutas
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);


// Rutas de prueba
app.get('/', (req, res) => {
  res.send('MercApp API funcionando ');
});

// Middleware de errores
const errorHandler = require('./middleware/errorHandler');
app.use(errorHandler);

// Levantar servidor
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


//PRUEBA
console.log('DB_URI:', process.env.DB_URI);
