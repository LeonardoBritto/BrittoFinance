const router = require('express').Router()

const PessoaController = require('../controllers/PessoaController')

router.get('/', PessoaController.getAll)
router.get('/nome', PessoaController.getNome)
router.post('/create', PessoaController.create)
router.post('/login', PessoaController.login)
router.patch('/:codigo', PessoaController.update)
router.delete('/:codigo', PessoaController.delete)

module.exports = router