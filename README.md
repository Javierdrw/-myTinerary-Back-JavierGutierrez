# MyTinerary Backend - Javier Gutiérrez

Este es el servidor backend para la página **MyTinerary**, un proyecto dedicado al turismo. Este servidor se encarga de manejar la data de ciudades, itinerarios, usuarios y otros aspectos relacionados con los destinos turísticos.

## Características

- Creado con **Node.js** y **Express**.
- Conectado a una base de datos MongoDB mediante **Mongoose**.
- Soporta operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre ciudades e itinerarios.
- Maneja rutas para obtener los detalles de cada ciudad e itinerario.
- Utiliza **dotenv** para la configuración de variables de entorno.
- Incluye **cors** para manejar solicitudes entre dominios.
- Logger integrado con **morgan** para capturar las solicitudes en la consola.
- Desarrollo más rápido con recarga automática usando **nodemon**.

## Requisitos

- **Node.js** (v14 o superior).
- **MongoDB** (local o en la nube, por ejemplo, [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)).
- **NPM** (Administrador de paquetes de Node.js).

## Instalación

Sigue los siguientes pasos para ejecutar el servidor en tu entorno local:

1. Clonar el Repositorio

    ```bash
    git clone https://github.com/Javierdrw/myTinerary-Back-JavierGutierrez.git
    cd mytinerary-back-javiergutierrez

2. Instalar Dependencias

Ejecuta el siguiente comando para instalar las dependencias necesarias:

    ```bash
    npm install

3. Configurar Variables de Entorno
Crea un archivo .env en la raíz del proyecto y define las siguientes variables:

PORT=8080
MONGO_URI=tu_conexion_mongodb

4. Cargar Datos Iniciales (Opcional)
El proyecto incluye algunos scripts para cargar datos de prueba en la base de datos. Puedes ejecutar cualquiera de estos comandos según los datos que desees cargar:

npm run dataCities      # Cargar datos de ciudades
npm run dataItineraries # Cargar datos de itinerarios
npm run dataUsers       # Cargar datos de usuarios

5. Ejecutar el Servidor en Desarrollo
Para iniciar el servidor en modo de desarrollo con recarga automática, ejecuta:

npm run dev

El servidor estará disponible en http://localhost:8080.

6. Iniciar el Servidor en Producción
Para iniciar el servidor en modo de producción, ejecuta:

npm start


Esta versión del README refleja todas las dependencias y scripts configurados en el `package.json`.
