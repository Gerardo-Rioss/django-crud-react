# Django CRUD con React

Este es un proyecto de ejemplo que implementa una aplicación CRUD (Create, Read, Update, Delete) utilizando Django como backend y React como frontend.

## 🚀 Tecnologías Utilizadas

### Backend
- **Django 5.2.5** - Framework web de Python
- **Django REST Framework** - Para construir APIs RESTful
- **Django CORS Headers** - Para manejar las políticas CORS
- **CoreAPI** - Para la documentación de la API

### Frontend
- **React 19** - Biblioteca de JavaScript para interfaces de usuario
- **React Router DOM v7** - Para el enrutamiento en la aplicación
- **Vite** - Herramienta de construcción y desarrollo
- **Tailwind CSS** - Framework de utilidades CSS
- **Axios** - Cliente HTTP para realizar peticiones a la API
- **React Hook Form** - Para el manejo de formularios
- **React Hot Toast** - Para notificaciones

## 🏗️ Estructura del Proyecto

```
django-crud-react/
├── client/                  # Frontend (React)
│   ├── public/              # Archivos estáticos
│   └── src/                 # Código fuente de React
│       ├── api/             # Llamadas a la API
│       ├── assets/          # Recursos estáticos
│       └── components/      # Componentes de React
├── django_crud_api/         # Configuración principal de Django
├── tasks/                   # Aplicación de Django para tareas
├── migrate/                 # Migraciones de la base de datos
├── venv/                    # Entorno virtual de Python
└── db.sqlite3               # Base de datos SQLite
```

## 🛠️ Configuración del Entorno

### Requisitos Previos
- Python 3.x
- Node.js 18+
- npm o yarn

### Instalación

1. **Clonar el repositorio**
   ```bash
   git clone [URL_DEL_REPOSITORIO]
   cd django-crud-react
   ```

2. **Configurar el entorno virtual (Python)**
   ```bash
   # En Windows
   python -m venv venv
   .\venv\Scripts\activate
   pip install -r requirements.txt
   ```

3. **Configurar el frontend**
   ```bash
   cd client
   npm install
   ```

4. **Variables de entorno**
   Crear un archivo `.env` en la raíz del proyecto con:
   ```
   DEBUG=True
   SECRET_KEY=tu_clave_secreta_aqui
   ```

## 🚀 Ejecución

### Backend
```bash
# En la raíz del proyecto
python manage.py runserver
```

### Frontend
```bash
cd client
npm run dev
```

## 🌐 Acceso
- **Frontend**: http://localhost:5173
- **Backend (API)**: http://localhost:8000
- **Panel de administración de Django**: http://localhost:8000/admin

## 📝 Características

- **CRUD** completo de tareas
- Interfaz de usuario moderna y responsiva
- Validación de formularios
- Notificaciones en tiempo real
- Documentación de API integrada

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.
