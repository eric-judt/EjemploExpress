const got = require('got');
const getCotizaciones = require('../controllers/cotizacion')
var express = require('express');
//Router administra los modulos
var router = express.Router();

//obtiene cotizacion oficial del dolar con historico
router.get('/', getCotizaciones);
     
//exportamos modulos
module.exports = router;
