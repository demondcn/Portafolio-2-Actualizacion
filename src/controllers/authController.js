// config/database.js
/* Este código importa los módulos necesarios y configura el enrutador para las rutas de autenticación. */
const express = require('express');
const router = express.Router();
const db = require('../config/database'); // Asegúrate de tener la configuración de la base de datos

// Ruta para el formulario de registro
/* El código `router.get('/register', (req, res) => {
  res.render('registro');
});` está definiendo un controlador de ruta para la solicitud GET al punto final '/register'. */
router.get('/register', (req, res) => {
  res.render('register');
});

// Ruta para manejar el envío del formulario de registro
/* El código `router.post('/register', (req, res) => {
  const {nombre de usuario, contraseñac} = req.body;` está definiendo un controlador de ruta para la
solicitud POST al punto final '/register'. */
router.post('/register', (req, res) => {
  const { username, passwordc } = req.body;

  // Verificar si el usuario ya existe en la base de datos
/* Este código maneja el proceso de registro de un usuario. */
  const checkUserQuery = 'SELECT * FROM users WHERE username = ?';
  db.query(checkUserQuery, [username], (err, results) => {
    if (err) throw err;

    if (results.length > 0) {
      // El usuario ya existe, puedes manejar esto según tus necesidades
      res.render('register', { error: 'El usuario ya existe' });
    } else {
      // El usuario no existe, puedes proceder con la inserción en la base de datos
      const insertUserQuery = 'INSERT INTO users (username, passwordc) VALUES (?, ?)';
      db.query(insertUserQuery, [username, passwordc], (err, results) => {
        if (err) throw err;

        // Redirigir al usuario a la página de inicio de sesión después del registro exitoso
        res.redirect('/auth/login');
      });
    }
  });
});

// Ruta para el formulario de inicio de sesión
/* El código `router.get('/login', (req, res) => {
  res.render('iniciar sesión');
});` está definiendo un controlador de ruta para la solicitud GET al punto final '/login'. */
router.get('/login', (req, res) => {
  res.render('login');
});

// Ruta para manejar el envío del formulario de inicio de sesión
/* El código `router.post('/login', (req, res) => {
  const {nombre de usuario, contraseñac} = req.body;` está definiendo un controlador de ruta para la
solicitud POST al punto final '/login'. */
router.post('/login', (req, res) => {
  const { username, passwordc } = req.body;

  // Verificar las credenciales en la base de datos
/* Este código maneja el envío del formulario de inicio de sesión. */
  const checkCredentialsQuery = 'SELECT * FROM users WHERE username = ? AND passwordc = ?';
  db.query(checkCredentialsQuery, [username, passwordc], (err, results) => {
    if (err) throw err;

    if (results.length > 0) {
      // Las credenciales son válidas, puedes manejar el inicio de sesión según tus necesidades
      res.redirect('/Avances_Proyecto.html');

    } else {
      // Credenciales inválidas, puedes manejar esto según tus necesidades
      res.render('login', { error: 'Credenciales inválidas' });
    }
  });
});
// trabajadores
router.get('/trabajadores', (req, res) => {
  const query = 'SELECT * FROM trabajadores';
  db.query(query, (err, results) => {
    if (err) throw err;
    res.render('trabajadores', { trabajadores: results });
  });
});

router.post('/trabajadores', (req, res) => {
  const { username, passwordc, cargo, areatrabajo, añostrabajando } = req.body;

  const insertTrabajadorQuery = 'INSERT INTO trabajadores (username, passwordc, cargo, areatrabajo, añostrabajando) VALUES (?, ?, ?, ?, ?)';
  db.query(insertTrabajadorQuery, [username, passwordc, cargo, areatrabajo, añostrabajando], (err, results) => {
    if (err) {
      // Manejar el error, por ejemplo, mostrar un mensaje de error
      res.render('trabajadores', { error: 'Error al registrar trabajador' });
    } else {
      // Redirigir al usuario a la página de trabajadores después del registro exitoso
      res.redirect('/auth/trabajadores');
    }
  });
});

// Ruta para ver todos los productos
router.get('/productos', (req, res) => {
  const query = 'SELECT * FROM productos';
  db.query(query, (err, results) => {
    if (err) throw err;
    res.render('productos', { productos: results });
  });
});

// Ruta para manejar el envío del formulario de productos
router.post('/productos', (req, res) => {
  const { nombreproducto, cantidad } = req.body;

  // Insertar nuevo producto en la base de datos
  const insertProductoQuery = 'INSERT INTO productos (nombreproducto, cantidad) VALUES (?, ?)';
  db.query(insertProductoQuery, [nombreproducto, cantidad], (err, results) => {
    if (err) throw err;

    // Redirigir al usuario a la página de productos después del registro exitoso
    res.redirect('/auth/productos');
  });
});
// Ruta para ver todos los usuarios (parte del Read en CRUD)
/* El código `router.get('/usuarios', (req, res) => {
    consulta const = 'SELECCIONAR * DE usuarios';
    db.query(consulta, (err, resultados) => {
       si (err) tirar errar;
       res.render('usuarios', {usuarios: resultados});
    });
 });` está definiendo un controlador de ruta para la solicitud GET al punto final '/users'. */
router.get('/users', (req, res) => {
    const query = 'SELECT * FROM users';
    db.query(query, (err, results) => {
       if (err) throw err;
       res.render('users', { users: results });
    });
 });

 // Ruta para ver un usuario específico (parte del Read en CRUD)
/* Este código define un controlador de ruta para la solicitud GET al punto final '/users/:id'.
Recupera un usuario específico de la base de datos según la ID de usuario proporcionada. */
 router.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    const query = 'SELECT * FROM users WHERE id = ?';
    db.query(query, [userId], (err, result) => {
       if (err) throw err;
       res.render('userDetail', { user: result[0] });
    });
 });

 // Ruta para actualizar un usuario (parte del Update en CRUD)
/* Este código define un controlador de ruta para la solicitud POST al punto final '/users/:id/update'. */
 router.post('/users/:id/update', (req, res) => {
    const userId = req.params.id;
    const { username, passwordc } = req.body;
    const query = 'UPDATE users SET username = ?, passwordc = ? WHERE id = ?';
    db.query(query, [username, passwordc, userId], (err, result) => {
       if (err) throw err;
       res.redirect('/auth/users');
    });
 });

 // Ruta para eliminar un usuario (parte del Delete en CRUD)
/* El código `router.get('/users/:id/delete', (req, res) => {
    const ID de usuario = req.params.id;
    consulta const = 'ELIMINAR DE los usuarios DONDE id =?';
    db.query(consulta, [ID de usuario], (err, resultado) => {
       si (err) tirar errar;
       res.redirect('/auth/usuarios');
    });
 });` está definiendo un controlador de ruta para la solicitud GET al punto final
'/users/:id/delete'. */
 router.get('/users/:id/delete', (req, res) => {
    const userId = req.params.id;
    const query = 'DELETE FROM users WHERE id = ?';
    db.query(query, [userId], (err, result) => {
       if (err) throw err;
       res.redirect('/auth/users');
    });
 });





/* `module.exports = router;` está exportando el objeto `router` para que pueda usarse en otros
archivos. Esto permite que otros archivos accedan y utilicen las rutas definidas en este archivo. */
module.exports = router;
