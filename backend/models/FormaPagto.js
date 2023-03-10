const { DataTypes } = require('sequelize')
const conn = require('../models/Connection')

const FormaPagto = conn.define('FormaPagto', {
    codigo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descricao: {
        type: DataTypes.STRING(30)
    },
    cor: {
        type: DataTypes.STRING(7)
    },
    tipo: {
        type: DataTypes.CHAR
    },
    limite: {
        type: DataTypes.DECIMAL(10,2)
    }
}, {freezeTableName: true, timestamps: false})

module.exports = FormaPagto