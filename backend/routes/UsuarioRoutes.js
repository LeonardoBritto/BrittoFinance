const router = require('express').Router()

const UsuarioController = require('../controllers/UsuarioController')

router.post('/inserir', UsuarioController.Inserir)
router.patch('/alterar/:codigo', UsuarioController.Alterar)
router.delete('/excluir/:codigo', UsuarioController.Excluir)
router.get('/', UsuarioController.GetAll)
router.get('/:codigo', UsuarioController.GetByCodigo)
router.post('/logar', UsuarioController.Logar)

module.exports = router