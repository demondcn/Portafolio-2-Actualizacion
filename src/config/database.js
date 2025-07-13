// config/database.js
const mysql = require('mysql2');
// Configuración de la conexión a la base de datos
/* El bloque de código está configurando la conexión a una base de datos MySQL. Crea un objeto de
conexión `db` usando el método `mysql.createConnection()`. El objeto está configurado con las
siguientes propiedades: */
const db = mysql.createConnection({
    host: 'localhost', // Dirección del servidor de la base de datos
    port: '3306', // Puerto de la base de datos
    user: 'root', // Usuario de la base de datos
    password: '1234', // Contraseña de la base de datos
    database: 'csgasql' // Nombre de la base de datos
});

// Conectar a la base de datos
/* La función `db.connect()` se utiliza para establecer una conexión a la base de datos MySQL. Toma
como parámetro una función de devolución de llamada, que se ejecutará una vez que se establezca la
conexión o si hay un error. */
db.connect((err) => {
    if (err) {
        console.error('Error de conexión a la base de datos:', err);
        throw err;
    }
    console.log('Conexión a la base de datos establecida');
});

/* `module.exports = db;` está exportando el objeto `db` para que pueda usarse en otros archivos. */
module.exports = db;
