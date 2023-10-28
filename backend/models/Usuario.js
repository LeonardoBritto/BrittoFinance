const { DataTypes } = require('sequelize')
const conn = require('../db/Connection')

const Usuario = conn.define('Usuario', {
    codigo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(30)
    },
    login: {
        type: DataTypes.STRING(10)
    },
    senha: {
        type: DataTypes.STRING
    }
}, {freezeTableName: true, timestamps: false})

module.exports = Usuario