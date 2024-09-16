const express = require('express')
const router = express.Router()
const controlador = require('../controladores/controlador_autenticacao');
const { validadorDeCookie } = require('../../middlewares/validadorDeCookie');

router.post('/login', controlador.login)
router.post('/logout', controlador.logout)

module.exports = router; 
