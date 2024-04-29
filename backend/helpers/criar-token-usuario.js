const jwt = require('jsonwebtoken')

const criarTokenUsuario = async(usuario, req, res) => {
    const token = jwt.sign({
        login: usuario.login,
        codigo: usuario.codigo
    }, 'finance')
    
    res.status(200).json({mensagem: 'Login realizado com sucesso!', token: token})
}

module.exports = criarTokenUsuario