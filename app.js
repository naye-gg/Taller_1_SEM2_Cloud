const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database'); // Importamos la conexión SQLite
const path = require('path');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Ruta principal
app.get('/', (req, res) => {
    console.log('Acceso a la ruta principal /');
    res.sendFile(path.join(__dirname, 'index.html'));
  });

// Listar todos los videojuegos
app.get('/videogames', (req, res) => {
  console.log('Acceso a GET /videogames');
  db.all('SELECT * FROM videogames', (err, rows) => {
    if (err) {
      console.error('Error al obtener videojuegos:', err.message);
      res.status(500).json({ error: 'Error al obtener videojuegos' });
    } else {
      res.json(rows);
    }
  });
});

// Obtener un videojuego por id
app.get('/videogames/:id', (req, res) => {
  const id = parseInt(req.params.id);
  console.log(`Acceso a GET /videogames/${id}`);
  db.get('SELECT * FROM videogames WHERE id = ?', [id], (err, row) => {
    if (err) {
      console.error('Error al obtener videojuego:', err.message);
      res.status(500).json({ error: 'Error al obtener videojuego' });
    } else if (row) {
      res.json(row);
    } else {
      res.status(404).json({ message: 'Videogame not found' });
    }
  });
});

// Insertar un nuevo videojuego
app.post('/videogames', (req, res) => {
  console.log('Acceso a POST /videogames');
  const { name, description, photo, video } = req.body;
  db.run(
    'INSERT INTO videogames (name, description, photo, video) VALUES (?, ?, ?, ?)',
    [name, description, photo, video],
    function (err) {
      if (err) {
        console.error('Error al insertar videojuego:', err.message);
        res.status(500).json({ error: 'Error al insertar videojuego' });
      } else {
        res.status(201).json({ id: this.lastID, ...req.body });
      }
    }
  );
});

// Actualizar un videojuego existente
app.put('/videogames/:id', (req, res) => {
  const id = parseInt(req.params.id);
  console.log(`Acceso a PUT /videogames/${id}`);
  const { name, description, photo, video } = req.body;
  db.run(
    'UPDATE videogames SET name = ?, description = ?, photo = ?, video = ? WHERE id = ?',
    [name, description, photo, video, id],
    function (err) {
      if (err) {
        console.error('Error al actualizar videojuego:', err.message);
        res.status(500).json({ error: 'Error al actualizar videojuego' });
      } else if (this.changes === 0) {
        res.status(404).json({ message: 'Videogame not found' });
      } else {
        res.json({ id, name, description, photo, video });
      }
    }
  );
});

// Eliminar un videojuego
app.delete('/videogames/:id', (req, res) => {
  const id = parseInt(req.params.id);
  console.log(`Acceso a DELETE /videogames/${id}`);
  db.run('DELETE FROM videogames WHERE id = ?', [id], function (err) {
    if (err) {
      console.error('Error al eliminar videojuego:', err.message);
      res.status(500).json({ error: 'Error al eliminar videojuego' });
    } else if (this.changes === 0) {
      res.status(404).json({ message: 'Videogame not found' });
    } else {
      res.status(204).send();
    }
  });
});

// Inicio del servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
