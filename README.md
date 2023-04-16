En este proyecto, utilizamos Node.js y Docker para crear tres contenedores que se comunican entre sí simulando el cache. Estos contenedores son instancias de Redis que sirve como caché para una API. La API utilizada es https://rickandmortyapi.com/character, que proporciona información sobre los personajes de la popular serie de televisión "Rick and Morty".


Para esto se debe instalar docker, y configurar nodejs. Para iniciar los servidores Redis que actuaran como el cache de esto con el comando:

`docker-compose up -d`

Luego con los servidores arriba, podemos correr el codigo codigo con el comando:

`npm run dev`


esto correra el codigo simulando las llamadas y haciendo la conexion entre el codigo nodejs y los contendores con Redis, nos devolvera el tiempo de respuesta de cada consulta junto con datos varios.

podemos observar el resultado de nuestras consultas en una web ingresando 

`http://localhost:3000/characters`

Este proyecto simula el uso de cache con Node.js y servidores Redis en Docker, de modo que se puedan manipular datos de una API.
