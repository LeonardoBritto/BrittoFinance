const router = require('express').Router()

const BancoController = require('../controllers/BancoController')

router.post('/inserir', BancoController.Inserir)
router.patch('/alterar/:codigo', BancoController.Alterar)
router.delete('/excluir/:codigo', BancoController.Excluir)
router.get('/', BancoController.GetAll)
router.get('/:codigo', BancoController.GetByCodigo)

module.exports = router