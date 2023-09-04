const Banco = require('../models/Banco')

module.exports = class BancoController {
    static async Inserir(req, res) {
        const {nome} = req.body

        if(!nome)
            return res.status(400).json({menssage: 'Nome do banco obrigatório!'})

        try {
            const banco = {codigo: 0, nome}

            await Banco.create(banco)
            res.status(201).json({message: 'Banco cadastrado com sucesso!'})  
        } catch (error) {
            res.status(500).json({message: error})    
        }
    }

    static async Alterar(req, res) {
        const codigo = req.params.codigo       

        const bancoExist = await Banco.findByPk(codigo)

        if(!bancoExist) 
            return res.status(404).json({menssage: 'Banco não encontrado!'})       

        const {nome} = req.body

        if(!nome)
            return res.status(400).json({menssage: 'Nome do banco obrigatório!'})

        try {
            const banco = {nome}

            await Banco.update(banco, {where: {codigo: codigo}})
            res.status(201).json({message: 'Banco alterado com sucesso!'})  
        } catch (error) {
            res.status(500).json({message: error})    
        }
    }

    static async Excluir(req, res) {
        const codigo = req.params.codigo       

        const bancoExist = await Banco.findByPk(codigo)

        if(!bancoExist) 
            return res.status(404).json({menssage: 'Banco não encontrado!'}) 
        
        try {
            await Banco.destroy({where: {codigo: codigo}})
            res.status(201).json({message: 'Banco excluído com sucesso!'}) 
        } catch (error) {
            res.status(500).json({message: error})     
        }
    }

    static async GetAll(req, res) {
        const bancos = await Banco.findAll()

        res.status(201).json({bancos: bancos})
    }

    static async GetByCodigo(req, res) {
        const codigo = req.params.codigo       

        const bancoExist = await Banco.findByPk(codigo)

        if(!bancoExist) 
            return res.status(404).json({menssage: 'Banco não encontrado!'}) 
        
        res.status(201).json({banco: bancoExist})
    }
}