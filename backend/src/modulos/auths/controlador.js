const TABLA = 'auths';
const bcrypt = require('bcrypt');
const auth = require('../../auth');

module.exports = function (dbinyectada) {
  let db = dbinyectada;

  if (!db) {
    db = require('../../DB/mysql');
  }

  async function login(usuario, password) {
    const data = await db.query(TABLA, { usuario: usuario });
  
    return bcrypt.compare(password, data.password)
      .then(resultado => {
        if (resultado === true) {
          // Generar un token
          return auth.asignarToken({ ...data });
        } else {
          throw new Error('informacion invalidad');
        }
      })
      .then(token => {
        console.log('Token generado:', token); // Agrega este log para verificar si se generó el token correctamente
        return token;
      })
      .catch(error => {
        console.log('Error en el proceso de autenticación:', error); // Agrega este log para verificar si se produjo algún error
        throw error;
      });
  }
  

  async function agregar(data) {
    const authsdata = {
      id: data.id,
    };

    if (data.usuario) {
      authsdata.usuario = data.usuario;
    }

    if (data.password) {
      authsdata.password = await bcrypt.hash(data.password.toString(), 5);
    }

    return db.agregar(TABLA, authsdata);
  }

  return {
    agregar,
    login,
  };
};
