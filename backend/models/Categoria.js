const { DataTypes } = require('sequelize')
const conn = require('./Connection')

const Categoria = conn.define('Categoria', {
    codigo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descricao: {
        type: DataTypes.STRING(30)
    }
}, {freezeTableName: true, timestamps: false})

module.exports = Categoria