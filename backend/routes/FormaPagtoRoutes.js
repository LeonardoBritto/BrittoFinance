const router = require('express').Router()

const FormaPagtoController = require('../controllers/FormaPagtoController')

router.get('/all', FormaPagtoController.getAll)
router.get('/descricao', FormaPagtoController.getDescricao)
router.post('/create', FormaPagtoController.create)
router.patch('/:codigo', FormaPagtoController.update)
router.delete('/:codigo', FormaPagtoController.delete)

module.exports = router