const FormaPagto = require('../models/FormaPagto')

module.exports = class FormaPagtoController {
    static async Inserir(req, res) {
        const {nome, tipo, codbanco} = req.body

        if(!nome)
            return res.status(400).json({menssage: 'Nome da forma obrigatório!'})

        if(!tipo)
            return res.status(400).json({menssage: 'Tipo da forma obrigatório!'})

        if(!codbanco)
            return res.status(400).json({menssage: 'Código do banco obrigatório!'})

        try {
            const formapagto = {codigo: 0, nome, tipo, codbanco}
            
            await FormaPagto.create(formapagto)
            res.status(201).json({message: 'Forma de Pagamento cadastrada com sucesso!'}) 
        } catch (error) {
            res.status(500).json({message: error})   
        }
    }

    static async Alterar(req, res) {
        const codigo = req.params.codigo       

        const formaExist = await FormaPagto.findByPk(codigo)

        if(!formaExist) 
            return res.status(404).json({menssage: 'Forma de Pagamento não encontrada!'})
        
        const {nome, tipo, codbanco} = req.body

        if(!nome)
            return res.status(400).json({menssage: 'Nome da forma obrigatório!'})

        if(!tipo)
            return res.status(400).json({menssage: 'Tipo da forma obrigatório!'})

        if(!codbanco)
            return res.status(400).json({menssage: 'Código do banco obrigatório!'})

        try {
            const formapagto = {nome, tipo, codbanco}
            
            await FormaPagto.update(formapagto, {where: {codigo: codigo}})
            res.status(201).json({message: 'Forma de Pagamento alterada com sucesso!'}) 
        } catch (error) {
            res.status(500).json({message: error})   
        }
    }

    static async Excluir(req, res) {
        const codigo = req.params.codigo       

        const formaExist = await FormaPagto.findByPk(codigo)

        if(!formaExist) 
            return res.status(404).json({menssage: 'Forma de Pagamento não encontrada!'}) 
        
        try {
            await FormaPagto.destroy({where: {codigo: codigo}})
            res.status(201).json({message: 'Forma de Pagamento excluída com sucesso!'}) 
        } catch (error) {
            res.status(500).json({message: error})     
        }
    }

    static async GetAll(req, res) {
        const formas = await FormaPagto.findAll()

        res.status(201).json({formas: formas})    
    }

    static async GetByCodigo(req, res) {
        const codigo = req.params.codigo       

        const formaExist = await FormaPagto.findByPk(codigo)

        if(!formaExist) 
            return res.status(404).json({menssage: 'Forma de Pagamento não encontrada!'})  
        
        res.status(201).json({forma: formaExist})
    }
}