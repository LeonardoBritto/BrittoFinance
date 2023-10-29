const router = require('express').Router()

const EstabelecimentoController = require('../controllers/EstabelecimentoController')

router.post('/inserir', EstabelecimentoController.Inserir)
router.patch('/alterar/:codigo', EstabelecimentoController.Alterar)
router.delete('/excluir/:codigo', EstabelecimentoController.Excluir)
router.get('/', EstabelecimentoController.GetAll)
router.get('/:codigo', EstabelecimentoController.GetByCodigo)

module.exports = router