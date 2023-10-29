const router = require('express').Router()

const CategoriaController = require('../controllers/CategoriaController')

router.post('/inserir', CategoriaController.Inserir)
router.patch('/alterar/:codigo', CategoriaController.Alterar)
router.delete('/excluir/:codigo', CategoriaController.Excluir)
router.get('/', CategoriaController.GetAll)
router.get('/:codigo', CategoriaController.GetByCodigo)

module.exports = router