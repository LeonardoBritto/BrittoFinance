const Pessoa = require('../models/Pessoa')

module.exports = class PessoaController{
    static async getAll(req, res){
        const pessoas = await Pessoa.findAll()

        res.status(201).json({pessoas: pessoas})
    }

    static async getNome(req, res){
        const pessoas = await Pessoa.findAll({attributes: ['codigo','nome']})

        res.status(201).json({pessoas: pessoas})    
    }

    static async create(req, res){
        const {nome, usuario, senha} = req.body

        if(!nome || !usuario || !senha){
            res.status(401).json({message: 'Obrigatório informar todos as informações!'})
            return
        }

        try {
            const pessoa = {codigo: 0, nome, usuario, senha}  
            
            await Pessoa.create(pessoa)

            res.status(201).json({message: 'Pessoa cadastrada com sucesso!'})      
        } catch (error) {
            res.status(500).json({message: error})  
        }
    }

    static async login(req, res){
        const {usuario, senha} = req.body

        const pessoa = await Pessoa.findOne({where: {usuario: usuario}})

        if(!pessoa){
            res.status(404).json({message: 'Usuário não encontrado!'})
            return
        }

        if(pessoa.senha != senha){
            res.status(401).json({message: 'Senha do usuário não confere!'})    
        }
    }

    static async update(req, res){

    }

    static async delete(req, res){
        
    }
}