La semilla para la base de datos se encuentra en el folder FUENTES y a su ves coleccion de postman. 

En este momento el proyecto solo cuenta con solo un entorno <dev> para lo que debe ejecutar npm run dev, las configuraciones de su base de datos para este entorno se encuentra en el archivo nodemon.json.

Si cuenta con docker instalado, puede ejecutar el siguiente script que levanta una instancia de mysql con la version en la que me encontraba realizando el desarollo : 

docker run --rm --name smartsoftTestDb -e "MYSQL_ROOT_PASSWORD=123456" -p 3000:3060 mysql:8.0.22
luego de ejecutar conectarse con el host localhost puerto 3000 y pass 123456, ejecutar el script de bd que esta en el folder FUENTES.

Nota: Esta intancia sera eliminada al detener el contenedor.