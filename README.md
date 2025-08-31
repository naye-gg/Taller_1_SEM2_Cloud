# API REST de Videojuegos - Guía de Postman

## Archivos creados para Postman:

1. **`Videojuegos_API.postman_collection.json`** - Colección completa con todas las llamadas a la API
2. **`Videojuegos_Environment.postman_environment.json`** - Ambiente con variables configuradas

## Cómo importar en Postman:

### 1. Importar la Colección:
- Abre Postman
- Click en "Import" 
- Selecciona el archivo `Videojuegos_API.postman_collection.json`
- Click "Import"

### 2. Importar el Environment:
- En Postman, ve a "Environments"
- Click en "Import"
- Selecciona el archivo `Videojuegos_Environment.postman_environment.json`
- Click "Import"
- Selecciona el environment "Videojuegos Environment" en el dropdown

## Endpoints incluidos en la colección:

### 🔍 **GET /videogames**
- **Descripción**: Obtiene todos los videojuegos
- **URL**: `{{base_url}}/videogames`
- **Respuesta**: Array de videojuegos

### 🔍 **GET /videogames/:id**
- **Descripción**: Obtiene un videojuego específico
- **URL**: `{{base_url}}/videogames/1`
- **Parámetro**: Cambiar el `1` por el ID deseado

### ➕ **POST /videogames**
- **Descripción**: Crea un nuevo videojuego
- **URL**: `{{base_url}}/videogames`
- **Body (JSON)**:
```json
{
    "name": "The Legend of Zelda: Breath of the Wild",
    "description": "Un juego de aventura y exploración en mundo abierto donde Link debe salvar Hyrule.",
    "photo": "https://example.com/zelda-botw.jpg",
    "video": "https://example.com/zelda-botw-trailer.mp4"
}
```

### ✏️ **PUT /videogames/:id**
- **Descripción**: Actualiza un videojuego existente
- **URL**: `{{base_url}}/videogames/1`
- **Body (JSON)**: Todos los campos del videojuego

### ❌ **DELETE /videogames/:id**
- **Descripción**: Elimina un videojuego
- **URL**: `{{base_url}}/videogames/1`
- **Parámetro**: Cambiar el `1` por el ID a eliminar

## Ejemplos de uso con curl (alternativa):

```bash
# 1. Obtener todos los videojuegos
curl -X GET http://localhost:3000/videogames

# 2. Obtener videojuego por ID
curl -X GET http://localhost:3000/videogames/1

# 3. Crear nuevo videojuego
curl -X POST http://localhost:3000/videogames \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Minecraft",
    "description": "Juego de construcción y supervivencia en mundo abierto",
    "photo": "https://example.com/minecraft.jpg",
    "video": "https://example.com/minecraft-trailer.mp4"
  }'

# 4. Actualizar videojuego
curl -X PUT http://localhost:3000/videogames/1 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Minecraft - Edición Actualizada",
    "description": "Juego de construcción, supervivencia y creatividad en mundo abierto",
    "photo": "https://example.com/minecraft-updated.jpg",
    "video": "https://example.com/minecraft-new-trailer.mp4"
  }'

# 5. Eliminar videojuego
curl -X DELETE http://localhost:3000/videogames/1
```

## Variables de Environment:

- **`base_url`**: `http://localhost:3000` (URL base del servidor)
- **`api_version`**: `v1` (versión de la API para futuras implementaciones)

## Pasos para probar:

1. Inicia tu servidor: `node app.js`
2. Importa ambos archivos en Postman
3. Selecciona el environment "Videojuegos Environment"
4. Ejecuta las requests en orden:
   - Primero GET para ver si hay datos
   - Luego POST para crear videojuegos
   - GET nuevamente para verificar
   - PUT para actualizar
   - DELETE para eliminar

¡Listo para usar! 🚀
