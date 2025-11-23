# RepoAplicacionesWebU3
# Proyecto Aplicaciones Web U3 - MercApp

<<<<<<< HEAD
## 👤 Datos del estudiante
=======
##  Datos del estudiante
>>>>>>> b1ca57ab17a8e0656381a7fc700732976825908c
- **Nombre:** Jostin Matamoros
- **Carrera:** Software
- **Asignatura:** Aplicaciones Web
- **Universidad:** UPS
- **Fecha:** Noviembre 2025

---

## Funcionalidades implementadas

###  Backend (Node.js + Express + MongoDB)
- CRUD completo de productos (crear, listar, ver detalle, editar, eliminar).
- Validación de datos y manejo de errores con middleware centralizado.
- Seed de base de datos con categorías y productos.
- API RESTful en `http://localhost:4000/api`.

###  Frontend (Vue 3 + Vite)
- SPA con rutas principales:
  - `/` → Catálogo de productos con buscador y filtro por categoría.
  - `/about` → Información general (lazy loading).
  - `/cart` → Carrito de compras (lazy loading).
  - `/product/new` → Formulario para crear producto.
  - `/product/:id` → Detalle de producto.
  - `/product/:id/edit` → Formulario para editar producto.
- Lazy loading de vistas con `import()` y `<Suspense>` con fallback.
- Carrito de compras con estado global (`useCart`):
  - Agregar/quitar productos.
  - Actualizar cantidad por producto.
  - Total calculado con `computed`.
  - Persistencia en `localStorage`.
- Botón en Home para acceder al formulario de nuevo producto.
- Enlaces de edición en cada tarjeta de producto.

### 📑 Documentación y evidencias
- Repositorio en GitHub con commits en fechas diferentes.
- Archivo `readme.txt` dentro del ZIP con la URL del repositorio.

---

## 📂 Instrucciones básicas de uso

### 1. Clonar el repositorio
///HEAD
```bash
=======
bash
///b1ca57ab17a8e0656381a7fc700732976825908c
/// git clone https://github.com/alexander06j/RepoAplicacionesWebU3.git

### 2. Backend
cd mercapp-backend
npm install
npm run dev
El backend corre en http://localhost:4000.

### 2. Frontend
cd mercapp-frontend
npm install
npm run dev
El frontend corre en http://localhost:5173

### 4. Bases de Datos
MongoDB debe estar corriendo en local.
Ejecutar el script de seed si es necesario para poblar categorías y productos:
node seed.js

### 4. Evidencias
- Commits realizados:
-- Implementación del carrito de compras.
-- Lazy loading con <Suspense>.
-- Botón de acceso al formulario en Home.
- Archivo readme.txt: contiene la URL del repositorio para entrega final.

###  Estado final
El proyecto cumple con todos los pasos solicitados:

Backend con CRUD y validaciones.

Frontend con SPA, lazy loading y <Suspense>.

Carrito con estado global y persistencia.

Acceso al formulario desde Home y edición en cada producto.

Documentación y evidencias en GitHub.

### Link Repositorio
https://github.com/alexander06j/RepoAplicacionesWebU3.git
