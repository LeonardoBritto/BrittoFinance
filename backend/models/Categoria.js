const { DataTypes } = require('sequelize')
const conn = require('../db/Connection')

const Categoria = conn.define('Categoria', {
    codigo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(30)
    }
}, {freezeTableName: true, timestamps: false})

module.exports = Categoria