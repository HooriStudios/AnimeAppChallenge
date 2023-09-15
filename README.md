
![Hoori Logo](https://www.hoori.com.mx/hoori_logo.png)

# Frontend Challenge

En este proyecto deberás construir una interfaz gráfica para mostrar los datos de una API de ánime. A su vez, deberás arreglar el _servicio_ que provee dichos datos.

Para esta tarea, utilizarás React como framework frontend y CSS puro para los estilos.

## Instrucciones


### Anime Service

Deberás terminar el Servicio de Ánime en el archivo `services/animeService.js`. En él, se encuentra la función que obtiene y parsea los datos de la API. 

La función está incompleta, deberás parsear los datos provenientes de la API en objetos de la clase `Anime` del archivo, y retornar una lista de ellos. En la clase se incluye solo información precisa de cada ánime, ej: título, rating, portada, etc.

### Interfaz Grárfica

La interfaz la deberás construir en el archivo `App.jsx` y `App.css`.

Recibirás los datos del AnimeService en un _custom hook_: `useAnime`, donde tendrás 3 estados:
- `anime`: Datos retornados por el Servicio de Ánime
- `loading`: Si la solicitud se encuentra cargando
- `error`: Si hubo un error en la solicitud

Deberás mostrar indicador de carga y mensaje de error claros en la interfaz

> Existe un 20% de probabilidad que la solicitud a la API falle. En dado caso, deberás mostrar el mensaje de error (almacenado en la variable `error`) en pantalla de forma clara. Deberás actualizar la página para volver a cargar los datos

## Instalación

Al descargar el proyecto y descomprimirlo, ejecutar en la terminal para instalar los módulos necesarios:

```
npm install
```

Para iniciar el proyecto en modo desarrollo utilizar el comando

```
npm run dev
```

## Entrega

Deberás subir este proyecto a un repositorio público de Github en tu cuenta personal y compartir el enlace con los evaluadores

## Notas adicionales

- No modificar ningún archivo dentro de la carpeta `core/` a menos que sea estrictamente necesario (deberás justificarlo).
