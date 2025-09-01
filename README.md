# 📺 API REST de Series Favoritas

Una API REST completa para gestionar tu colección de series favoritas, construida con Node.js, Express y SQLite.

## 🚀 Características

- ✅ CRUD completo (Crear, Leer, Actualizar, Eliminar)
- ✅ Base de datos SQLite integrada
- ✅ Interfaz web responsive con Bootstrap
- ✅ Validación de datos
- ✅ Manejo de errores
- ✅ CORS habilitado
- ✅ Campos adicionales: género y calificación

## 🛠️ Tecnologías Utilizadas

- **Backend**: Node.js + Express
- **Base de datos**: SQLite (better-sqlite3)
- **Frontend**: HTML5 + Bootstrap 4 + jQuery
- **Otras**: CORS, Body-parser

## 📋 Requisitos Previos

- Node.js (versión 14 o superior)
- npm

## ⚡ Instalación y Ejecución

1. **Clonar el repositorio:**
```bash
git clone https://github.com/naye-gg/Taller_1_SEM2_Cloud.git
cd Taller_1_SEM2_Cloud
```

2. **Instalar dependencias:**
```bash
npm install
```

3. **Ejecutar la aplicación:**
```bash
npm run dev
```

4. **Acceder a la aplicación:**
   - Interfaz web: `http://localhost:8000`
   - API: `http://localhost:8000/series`

## 📊 Estructura de Datos

Cada serie tiene los siguientes campos:

```json
{
  "id": 1,
  "name": "Breaking Bad",
  "description": "Un profesor de química se convierte en fabricante de metanfetaminas",
  "photo": "https://example.com/breaking-bad.jpg",
  "trailer": "https://example.com/breaking-bad-trailer.mp4",
  "genre": "Drama/Thriller",
  "rating": 9.5
}
```

## 🔗 Endpoints de la API

### 📖 Obtener todas las series
```http
GET /series
```

### 📖 Obtener una serie específica
```http
GET /series/:id
```

### ➕ Crear una nueva serie
```http
POST /series
Content-Type: application/json

{
  "name": "Stranger Things",
  "description": "Un grupo de niños se enfrenta a fenómenos sobrenaturales en los años 80",
  "photo": "https://example.com/stranger-things.jpg",
  "trailer": "https://example.com/stranger-things-trailer.mp4",
  "genre": "Ciencia Ficción/Horror",
  "rating": 8.7
}
```

### ✏️ Actualizar una serie
```http
PUT /series/:id
Content-Type: application/json

{
  "name": "Stranger Things - Temporada Final",
  "description": "La conclusión épica de la serie...",
  "photo": "https://example.com/stranger-things-s5.jpg",
  "trailer": "https://example.com/stranger-things-s5-trailer.mp4",
  "genre": "Ciencia Ficción/Horror",
  "rating": 9.0
}
```

### ❌ Eliminar una serie
```http
DELETE /series/:id
```
## 💡 Ejemplos de uso con curl

```bash
# 1. Obtener todas las series
curl -X GET http://localhost:8000/series

# 2. Obtener serie por ID
curl -X GET http://localhost:8000/series/1

# 3. Crear nueva serie
curl -X POST http://localhost:8000/series \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Game of Thrones",
    "description": "Épica serie de fantasía medieval con dragones y política",
    "photo": "https://example.com/got.jpg",
    "trailer": "https://example.com/got-trailer.mp4",
    "genre": "Fantasía/Drama",
    "rating": 9.3
  }'

# 4. Actualizar serie
curl -X PUT http://localhost:8000/series/1 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Game of Thrones - Edición Completa",
    "description": "La serie completa de fantasía medieval más exitosa de HBO",
    "photo": "https://example.com/got-complete.jpg",
    "trailer": "https://example.com/got-complete-trailer.mp4",
    "genre": "Fantasía/Drama",
    "rating": 9.0
  }'

# 5. Eliminar serie
curl -X DELETE http://localhost:8000/series/1
```

## 🗃️ Base de Datos

La aplicación crea automáticamente una base de datos SQLite (`series.db`) con la siguiente estructura:

```sql
CREATE TABLE series (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    photo TEXT NOT NULL,
    trailer TEXT NOT NULL,
    genre TEXT,
    rating REAL
);
```

## 🌐 Uso en VM/Servidor

Si ejecutas la aplicación en una máquina virtual o servidor:

1. **Configura el puerto en el firewall/seguridad** (puerto 8000)
2. **La aplicación escucha en todas las interfaces** (0.0.0.0:8000)
3. **Accede usando la IP pública**: `http://[IP-DE-TU-VM]:8000`

## 📦 Archivos de Postman

### Para Series Favoritas (Actualizados):
- `Series_API.postman_collection.json` - Colección con endpoints de series
- `Series_Environment.postman_environment.json` - Variables de entorno actualizadas

### Para Videojuegos (Legacy):
- `Videojuegos_API.postman_collection.json` - Colección original
- `Videojuegos_Environment.postman_environment.json` - Variables originales

### 📥 Cómo importar en Postman:

1. **Importar la Colección de Series:**
   - Abre Postman
   - Click en "Import"
   - Selecciona `Series_API.postman_collection.json`
   - Click "Import"

2. **Importar el Environment:**
   - Ve a "Environments" en Postman
   - Click en "Import"
   - Selecciona `Series_Environment.postman_environment.json`
   - Selecciona "Series Favoritas Environment" en el dropdown

## 🚀 Deploy y Configuración

### Variables de Entorno
- `PORT`: Puerto del servidor (default: 8000)

### Para producción:
```bash
npm start
```

## 👥 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia ISC.

---

**Desarrollado por**: @naye-gg  
**Referenciado por**: @ramiroec

