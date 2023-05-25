const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Ruta para obtener todos los usuarios
router.get('/users', (req, res) => {
  User.find()
    .then((users) => {
      res.json(users);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener usuarios' });
    });
});

// Ruta para crear un nuevo usuario
router.post('/users', (req, res) => {
  const { username, password } = req.body;
  const user = new User({ username, password });

  user.save()
    .then(() => {
      res.status(201).json({ message: 'Usuario creado exitosamente' });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: 'Error al crear usuario' });
    });
});

// Otras rutas y controladores

module.exports = router;
