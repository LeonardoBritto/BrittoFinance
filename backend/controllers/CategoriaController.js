const Categoria = require('../models/Categoria')

module.exports = class CategoriaController {
    static async Inserir(req, res) {
        const {nome} = req.body

        if(!nome)
            return res.status(400).json({mensagem: 'Nome da categoria obrigatório!'})

        try {
            const categoria = {codigo: 0, nome}

            await Categoria.create(categoria)
            res.status(201).json({message: 'Categoria cadastrada com sucesso!'})  
        } catch (error) {
            res.status(500).json({message: error})    
        }
    }

    static async Alterar(req, res) {
        const codigo = req.params.codigo       

        const categoriaExist = await Categoria.findByPk(codigo)

        if(!categoriaExist) 
            return res.status(404).json({mensagem: 'Categoria não encontrado!'})       

        const {nome} = req.body

        if(!nome)
            return res.status(400).json({mensagem: 'Nome da categoria obrigatório!'})

        try {
            const categoria = {nome}

            await Categoria.update(categoria, {where: {codigo: codigo}})
            res.status(201).json({message: 'Categoria alterado com sucesso!'})  
        } catch (error) {
            res.status(500).json({message: error})    
        } 
    }

    static async Excluir(req, res) {
        const codigo = req.params.codigo       

        const categoriaExist = await Categoria.findByPk(codigo)

        if(!categoriaExist) 
            return res.status(404).json({mensagem: 'Categoria não encontrada!'}) 
        
        try {
            await Categoria.destroy({where: {codigo: codigo}})
            res.status(201).json({message: 'Categoria excluída com sucesso!'}) 
        } catch (error) {
            res.status(500).json({message: error})     
        }    
    }

    static async GetAll(req, res) {
        const categorias = await Categoria.findAll()

        if  (categorias.length === 0)
            return res.status(404).json({mensagem: 'Nenhuma categoria cadastrada!'})

        res.status(201).json({categorias: categorias})    
    }

    static async GetByCodigo(req, res) {
        const codigo = req.params.codigo       

        const categoriaExist = await Categoria.findByPk(codigo)

        if(!categoriaExist) 
            return res.status(404).json({mensagem: 'Categoria não encontrada!'}) 
        
        res.status(201).json({categoria: categoriaExist})   
    }
}