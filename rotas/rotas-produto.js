const express = require('express')
const router = express.Router()
const controlador = require('../controladores/controlador-produto')
const { validadorDeCookie } = require('../../middlewares/validadorDeCookie')


router.get('', validadorDeCookie, controlador.listProdutos)
router.get('/:id', controlador.getProduto)
router.post('', controlador.createProduto)
router.post('/:id', controlador.updateProduto )
router.delete('/:id', controlador.deleteProduto)

module.exports = router;