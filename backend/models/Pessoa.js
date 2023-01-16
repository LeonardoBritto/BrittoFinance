const { DataTypes } = require('sequelize')
const conn = require('../models/Connection')

const Pessoa = conn.define('Pessoa', {
    codigo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(10)
    },
    usuario: {
        type: DataTypes.STRING(10)   
    },
    senha: {
        type: DataTypes.STRING(10)
    }
}, {freezeTableName: true, timestamps: false})

module.exports = Pessoa