const express = require ('express');
const morgan = require ('morgan');
const config = require('./config');
const cors = require('cors');




const clientes =require('./modulos/clientes/rutas');
const usuarios =require('./modulos/usuarios/rutas');
const auths =require('./modulos/auths/rutas');

const app = express();


// middlwware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//configuracion
app.set('port', config.app.port);


// rutas

app.use('/api/clientes', clientes);
app.use('/api/usuarios', usuarios);
app.use('/api/auths', auths);

module.exports = app;