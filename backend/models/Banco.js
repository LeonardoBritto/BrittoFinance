const { DataTypes } = require('sequelize')
const conn = require('../db/Connection')

const Banco = conn.define('Banco', {
    codigo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(30)
    }
}, {freezeTableName: true, timestamps: false})

module.exports = Banco