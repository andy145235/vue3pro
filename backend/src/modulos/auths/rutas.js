const express =require ('express');
const respuesta = require('../../red/respuestas');
const controlador = require('./index');




const router = express.Router();

router.get('/login',login);


async function login(req, res) {
    try {
        const token = await controlador.login(req.body.usuario, req.body.password);
        respuesta.success(req,res, token, 200);
    } catch (err) {
        respuesta.error(req,res,err,500);
        
    }
    
    const token = await controlador.login();
        respuesta.success(req,res, token, 200);
   
};





module.exports = router;