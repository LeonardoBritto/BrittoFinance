const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('brittofinance', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: "-03:00",
})

try {
    sequelize.authenticate()
    console.log('Conectado com Sucesso!')
} catch (error) {
    console.log(`Não foi possível conectar: ${error}`)
}

module.exports = sequelize