const Database = require('better-sqlite3');

// Abrimos o creamos la base de datos
const db = new Database('series.db');

// Creamos la tabla si no existe
db.prepare(`
  CREATE TABLE IF NOT EXISTS series (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    description TEXT,
    photo TEXT,
    trailer TEXT,
    genre TEXT,
    rating REAL
  )
`).run();

console.log('Conectado a la base de datos SQLite con better-sqlite3.');

module.exports = db;
