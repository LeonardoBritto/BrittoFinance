const FormaPagto = require('../models/FormaPagto')

module.exports = class FormaPagtoController{
    static async getAll(req, res){
        const formas = await FormaPagto.findAll()

        res.status(201).json({formas: formas})
    }

    static async getDescricao(req, res){
        const formas = await FormaPagto.findAll({attributes: ['codigo','descricao']})

        res.status(201).json({formas: formas})
    }

    static async create(req, res){
        const {descricao, cor, tipo} = req.body

        if(!descricao || !cor || !tipo){
            res.status(401).json({message: 'Obrigatório informar todos as informações!'})
            return
        }

        try {
            const forma = {codigo: 0, descricao, cor, tipo}

            await FormaPagto.create(forma)

            res.status(201).json({message: 'Forma de Pagamento cadastrada com sucesso!'})      
        } catch (error) {
            res.status(500).json({message: error})            
        }
    }

    static async update(req, res){
        const codigo = req.params.codigo

        const {descricao, cor, tipo} = req.body

        if(!descricao || !cor || !tipo){
            res.status(401).json({message: 'Obrigatório informar todos as informações!'})
            return
        }

        try {
            const forma = {descricao, cor, tipo}

            await FormaPagto.update(forma, {where: {codigo: codigo}})

            res.status(201).json({message: 'Forma de Pagamento alterada com sucesso!'})      
        } catch (error) {
            res.status(500).json({message: error})
        }
    }

    static async delete(req, res){
        const codigo = req.params.codigo
        try {
            await FormaPagto.destroy({where: {codigo: codigo}})  
            
            res.status(201).json({message: 'Forma de Pagamento deletada com sucesso!'})      
        } catch (error) {
            res.status(500).json({message: error})    
        }
    }
}