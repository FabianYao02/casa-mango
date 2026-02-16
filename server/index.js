const express = require('express');
const cors = require('cors');
const pool = require('./db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT ; // Puerto 4000 para no chocar con Next.js

// Middlewares
app.use(cors());       // Permite que el cliente (Next.js) nos hable
app.use(express.json()); // Nos permite recibir datos JSON

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Hola!🥭');
});

//Ruta de prueba db
app.get('/db-test', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error ejecutando la consulta:', error);
    res.status(500).json({ error: 'Error ejecutando la consulta' });
  }
});

app.get('/api/productos', async (req, res) => {
  try {
    // Solo traemos los que tienen el borrado lógico en "activo"
    const query = 'SELECT * FROM productos WHERE activo = 1 ORDER BY categoria ASC';
    const result = await pool.query(query);
    
    res.json(result.rows);
  } catch (err) {
    console.error('Error al obtener productos:', err);
    res.status(500).json({ error: 'Error al cargar el menú' });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});