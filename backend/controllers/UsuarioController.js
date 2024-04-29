const criarTokenUsuario = require('../helpers/criar-token-usuario')
const Usuario = require('../models/Usuario')

const bcrypt = require('bcrypt')

module.exports = class UsuarioController {
    static async Inserir(req, res) {
        const {nome, login, senha} = req.body

        if(!nome)
            return res.status(400).json({menssagem: 'Nome obrigatório!'})

        if(!login)
            return res.status(400).json({menssagem: 'Login obrigatório!'})

        const usuarioExist = await Usuario.findOne({where: {login: login}})

        if(usuarioExist)
            return res.status(400).json({menssagem: 'Login já esta em uso!'})

        if(!senha)
            return res.status(400).json({menssagem: 'Senha obrigatória!'})

        const salt = await bcrypt.genSalt(12)
        const senhaHash = await bcrypt.hash(senha, salt)

        try {
            const usuario = {codigo: 0, nome, login, senha: senhaHash}
            
            await Usuario.create(usuario)
            res.status(201).json({messagem: 'Usuário cadastrado com sucesso!'})
        } catch (error) {
            res.status(500).json({messagem: error})
        }        
    }

    static async Alterar(req, res) {
        
    }

    static async Excluir(req, res) {
        const codigo = req.params.codigo       

        const usuario = await Usuario.findByPk(codigo)

        if(!usuario) 
            return res.status(404).json({menssagem: 'Usuário não encontrado!'})

        try {
            await Usuario.destroy({where: {codigo: codigo}})
            res.status(201).json({messagem: 'Usuário excluído com sucesso!'}) 
        } catch (error) {
            res.status(500).json({messagem: error})     
        }
        
    }

    static async GetAll(req, res) {
        const usuarios = await Usuario.findAll()

        if (usuarios.length === 0)
            return res.status(404).json({menssagem: 'Nenhum usuário cadastrado!'})
         
        res.status(201).json({usuarios: usuarios})   
    }

    static async GetByCodigo(req, res) {
        const codigo = req.params.codigo       

        const usuario = await Usuario.findByPk(codigo)
            
        if(!usuario) 
            return res.status(404).json({menssagem: 'Usuário não encontrado!'}) 
        
        res.status(201).json({usuario: usuario})
    }

    static async Logar(req, res) {
        const {login, senha} = req.body    

        const usuario = await Usuario.findOne({where: {login: login}})

        if(!usuario) 
            return res.status(404).json({menssagem: 'Login incorreto, usuário não encontrado!'}) 

        const senhaCorreta = await bcrypt.compare(senha, usuario.senha)

        if(!senhaCorreta)
            return res.status(404).json({menssagem: 'Senha não confere!'}) 

        await criarTokenUsuario(usuario, req, res)
    }
}