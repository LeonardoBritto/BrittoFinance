const Estabelecimento = require('../models/Estabelecimento')

module.exports = class EstabelecimentoController {
    static async Inserir(req, res) {
        const {razaosocial, nomefantasia, codcategoria} = req.body

        if(!razaosocial)
            return res.status(400).json({mensagem: 'Razão Social do estabelecimento obrigatório!'})

        try {
            const estabelecimento = {codigo: 0, razaosocial, nomefantasia, codcategoria}

            await Estabelecimento.create(estabelecimento)
            res.status(201).json({message: 'Estabelecimento cadastrado com sucesso!'})  
        } catch (error) {
            res.status(500).json({message: error})    
        }
    }

    static async Alterar(req, res) {
        const codigo = req.params.codigo       

        const estabelecimentoExist = await Estabelecimento.findByPk(codigo)

        if(!estabelecimentoExist) 
            return res.status(404).json({mensagem: 'Estabelecimento não encontrado!'})       

        const {razaosocial, nomefantasia, codcategoria} = req.body

        if(!razaosocial)
            return res.status(400).json({mensagem: 'Razão Social do estabelecimento obrigatório!'})

        try {
            const estabelecimento = {razaosocial, nomefantasia, codcategoria}

            await Estabelecimento.update(estabelecimento, {where: {codigo: codigo}})
            res.status(201).json({message: 'Estabelecimento alterado com sucesso!'}) 
        } catch (error) {
            res.status(500).json({message: error})     
        }
    }

    static async Excluir(req, res) {
        const codigo = req.params.codigo       

        const estabelecimentoExist = await Estabelecimento.findByPk(codigo)

        if(!estabelecimentoExist) 
            return res.status(404).json({mensagem: 'Estabelecimento não encontrado!'})

        try {
            await Estabelecimento.destroy({where: {codigo: codigo}})
            res.status(201).json({message: 'Estabelecimento excluído com sucesso!'}) 
        } catch (error) {
            res.status(500).json({message: error})     
        }
    }

    static async GetAll(req, res) {
        const estabelecimentos = await Estabelecimento.findAll({attributes: {exclude: ['codcategoria']}})

        res.status(201).json({estabelecimentos: estabelecimentos})
    }

    static async GetByCodigo(req, res) { 
        const codigo = req.params.codigo       

        const estabelecimentoExist = await Estabelecimento.findByPk(codigo)

        if(!estabelecimentoExist) 
            return res.status(404).json({mensagem: 'Estabelecimento não encontrado!'})

        res.status(201).json({estabelecimento: estabelecimentoExist})
    }
}