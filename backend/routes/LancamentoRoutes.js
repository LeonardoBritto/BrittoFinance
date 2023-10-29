const router = require('express').Router()

const LancamentoController = require('../controllers/LancamentoController')

router.post('/inserir', LancamentoController.Inserir)
router.patch('/alterar/:codigo', LancamentoController.Alterar)
router.delete('/excluir/:codigo', LancamentoController.Excluir)
router.get('/', LancamentoController.GetAll)
router.get('/:codigo', LancamentoController.GetByCodigo)

module.exports = router