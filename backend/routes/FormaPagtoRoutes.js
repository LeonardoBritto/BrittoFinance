const router = require('express').Router()

const FormaPagtoController = require('../controllers/FormaPagtoController')

router.post('/inserir', FormaPagtoController.Inserir)
router.patch('/alterar/:codigo', FormaPagtoController.Alterar)
router.delete('/excluir/:codigo', FormaPagtoController.Excluir)
router.get('/', FormaPagtoController.GetAll)
router.get('/:codigo', FormaPagtoController.GetByCodigo)

module.exports = router