# PROGRAMACION5BACKEND

Repositorio de la asignatura Programacion V - Backend.

## academia-api

API REST construida con Express y TypeScript.

### Requisitos

- Node.js 18 o superior
- npm

### Instalacion

```bash
cd academia-api
npm install
```

### Ejecucion

```bash
npm run dev     # modo desarrollo con recarga automatica
npm run build   # compila TypeScript a dist/
npm start       # ejecuta la version compilada
```

El servidor queda disponible en `http://localhost:3000`. El puerto se puede cambiar con la variable de entorno `PORT` (ver `.env.example`).

### Endpoints

| Metodo | Ruta | Respuesta | Codigo |
|---|---|---|---|
| GET | `/health` | `{ "status": "ok" }` | 200 |
| GET | `/version` | `{ "version": "1.0.0" }` | 200 |
| GET | `/courses` | Arreglo de cursos | 200 |
| GET | `/courses/:id` | Curso solicitado | 200 |
| GET | `/courses/:id` | `{ "error": "Curso no encontrado" }` | 404 |

### Ejemplo

```bash
curl http://localhost:3000/courses/2
```

```json
{ "id": 2, "title": "Bases de Datos Avanzadas", "capacity": 25 }
```

## Estructura

```
academia-api/
  src/
    index.ts       servidor y rutas
  tsconfig.json
  package.json
  .env.example
```
