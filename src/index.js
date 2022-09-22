import express from 'express';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url'; /**/
// Inicializacion del modulo express
const app = express();
const PORT = 3000;
/*con esto podemos obtener la ruta absoluta de los archivos sin tener que estar escribiendolas directamente*/
const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(__dirname, '/views');

// esta propiedad set nos permite establecer que caracteristicas queremos activas en express.En este caso la caracteristica que estamos activando es view engine que basicamente se trata de un motor de plantillas que nos permite generar archivos HTML con la capacidad extendida de poder contener en el logica de programacion sin hacer uso de la etiqueta <script/>
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index.ejs');
});
// Aqui usamos el metodo listen para escuchar mostrar lo que el servidor devuelve en pantalla atravez del puerto 3000
app.listen(PORT);
