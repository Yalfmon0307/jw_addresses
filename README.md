# jw_addresses
En esta api puedes crear datos de casas y su ping en google maps para hacer una ruta de direeciones. 
Esta pensada para trabajos como prestamistas o personas que abastecen distintos lugares y visitan muchas casas.

## instalacion
1- crea una base de datos en posgre con nombre jw_addresses 

2- En la raiz crea un archivo .env con las variables:
PORT=3000
DB_USER = postgres
HOST = localhost
DB_NAME = jw_addresses
DB_PASSWORD = ''
DB_PORT = 5432
SECRET_KEY = 

3- npm run install-dependencies

4- npm run db

5- npm run start
