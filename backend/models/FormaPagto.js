const { DataTypes } = require('sequelize')
const conn = require('../db/Connection')

const Banco = require('./Banco')

const FormaPagto = conn.define('FormaPagto', {
    codigo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(30)
    },
    tipo: {
        type: DataTypes.CHAR
    }
}, {freezeTableName: true, timestamps: false})

FormaPagto.belongsTo(Banco, {foreignKey: 'codbanco'})

module.exports = FormaPagto