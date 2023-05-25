const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/base_datos', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conexión exitosa a la base de datos');
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos', error);
  });

const usersRoutes = require('./routes/user');
app.use('/api', usersRoutes);

// Otras configuraciones y rutas

app.listen(port, () => {
  console.log(`Servidor backend en ejecución en http://localhost:${port}`);
});
