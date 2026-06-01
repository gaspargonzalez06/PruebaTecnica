# PruebaTecnica

Implementación mínima de una prueba técnica con:

- Frontend en React (Vite)
- Backend en ASP.NET Core Web API

## Estructura

- `/frontend/pruebatecnica-frontend`
- `/backend/PruebaTecnica.Api`

## Ejecutar backend

```bash
cd /tmp/workspace/gaspargonzalez06/PruebaTecnica/backend/PruebaTecnica.Api
dotnet run
```

API disponible en `http://localhost:5168/api/health`.

## Ejecutar frontend

```bash
cd /tmp/workspace/gaspargonzalez06/PruebaTecnica/frontend/pruebatecnica-frontend
npm install
npm run dev
```

Frontend disponible en `http://localhost:5173` y consume el backend por proxy (`/api`).
