const express = require('express'); // Importando el framework Express
const exphbs = require('express-handlebars'); // Importando el módulo Express Handlebars
const bodyParser = require('body-parser'); // Importando el módulo Body Parser
const session = require('express-session'); // Importando el módulo Express Session
const path = require('path'); // Importando el módulo Path para trabajar con rutas

const authController = require('./src/controllers/authController'); // Importando el módulo authController

const app = express(); // Creando una instancia de la aplicación Express
const puerto = 5000; // Configurando el número de puerto para el servidor

// Middleware
app.use(bodyParser.urlencoded({ extended: true })); // Parseando cuerpos codificados en URL
app.use(express.static('public')); // Sirviendo archivos estáticos desde el directorio 'public'
app.use(session({ secret: 'tu-clave-secreta', resave: false, saveUninitialized: true })); // Configurando la sesión

// Configurando Handlebars
app.engine('hbs', exphbs({ extname: 'hbs' })); // Configurando el motor Handlebars
app.set('view engine', 'hbs'); // Configurando el motor de vistas como Handlebars
app.set('views', path.join(__dirname, 'src', 'views')); // Configurando el directorio de vistas

// Rutas
app.get('/', (req, res) => {
   res.render('login'); // Renderizando la vista 'login'
});

app.get('/Avances_Proyecto.html', (req, res) => {
   res.sendFile(path.join(__dirname, 'public', 'styles', 'Avances_Proyecto.html')); // Enviando el archivo 'Avances_Proyecto.html'
});

app.use('/auth', authController); // Usando el authController para la ruta '/auth'

// Iniciando el servidor
app.listen(puerto, () => {
   console.log(`El servidor está corriendo en http://localhost:${puerto}`);
    // Registrando el mensaje de inicio del servidor
});
