const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database'); // Importamos la conexión SQLite (better-sqlite3)
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(cors());

// Ruta principal
app.get('/', (req, res) => {
  console.log('Acceso a la ruta principal /');
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Listar todas las series
app.get('/series', (req, res) => {
  console.log('Acceso a GET /series');
  try {
    const rows = db.prepare('SELECT * FROM series').all();
    res.json(rows);
  } catch (err) {
    console.error('Error al obtener series:', err.message);
    res.status(500).json({ error: 'Error al obtener series' });
  }
});

// Obtener una serie por id
app.get('/series/:id', (req, res) => {
  const id = parseInt(req.params.id);
  console.log(`Acceso a GET /series/${id}`);
  try {
    const row = db.prepare('SELECT * FROM series WHERE id = ?').get(id);
    if (row) {
      res.json(row);
    } else {
      res.status(404).json({ message: 'Serie not found' });
    }
  } catch (err) {
    console.error('Error al obtener serie:', err.message);
    res.status(500).json({ error: 'Error al obtener serie' });
  }
});

// Insertar una nueva serie
app.post('/series', (req, res) => {
  console.log('Acceso a POST /series');
  console.log('Datos recibidos del cliente:', req.body);

  const { name, description, photo, trailer, genre, rating } = req.body;

  if (!name || !description || !photo || !trailer) {
    console.error('Error: Datos incompletos');
    return res.status(400).json({ error: 'Los campos name, description, photo y trailer son obligatorios' });
  }

  try {
    const stmt = db.prepare(
      'INSERT INTO series (name, description, photo, trailer, genre, rating) VALUES (?, ?, ?, ?, ?, ?)'
    );
    const info = stmt.run(name, description, photo, trailer, genre || null, rating || null);
    console.log('Serie insertada correctamente con ID:', info.lastInsertRowid);
    res.status(201).json({ id: info.lastInsertRowid, ...req.body });
  } catch (err) {
    console.error('Error al insertar serie:', err.message);
    res.status(500).json({ error: 'Error al insertar serie' });
  }
});

// Actualizar una serie existente
app.put('/series/:id', (req, res) => {
  const id = parseInt(req.params.id);
  console.log(`Acceso a PUT /series/${id}`);
  const { name, description, photo, trailer, genre, rating } = req.body;

  try {
    const stmt = db.prepare(
      'UPDATE series SET name = ?, description = ?, photo = ?, trailer = ?, genre = ?, rating = ? WHERE id = ?'
    );
    const info = stmt.run(name, description, photo, trailer, genre || null, rating || null, id);

    if (info.changes === 0) {
      res.status(404).json({ message: 'Serie not found' });
    } else {
      res.json({ id, name, description, photo, trailer, genre, rating });
    }
  } catch (err) {
    console.error('Error al actualizar serie:', err.message);
    res.status(500).json({ error: 'Error al actualizar serie' });
  }
});

// Eliminar una serie
app.delete('/series/:id', (req, res) => {
  const id = parseInt(req.params.id);
  console.log(`Acceso a DELETE /series/${id}`);

  try {
    const stmt = db.prepare('DELETE FROM series WHERE id = ?');
    const info = stmt.run(id);

    if (info.changes === 0) {
      res.status(404).json({ message: 'Serie not found' });
    } else {
      res.status(204).send();
    }
  } catch (err) {
    console.error('Error al eliminar serie:', err.message);
    res.status(500).json({ error: 'Error al eliminar serie' });
  }
});

// Inicio del servidor
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor corriendo en http://0.0.0.0:${PORT}`);
});
