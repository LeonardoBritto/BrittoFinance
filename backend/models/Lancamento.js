const { DataTypes } = require('sequelize')
const conn = require('../db/Connection')

const Estabelecimento = require('./Estabelecimento')
const Usuario = require('./Usuario')

const Lancamento = conn.define('Lancamento', {
    codigo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    data: {
        type: DataTypes.DATEONLY
    },
    parcela: {
        type: DataTypes.CHAR(5)
    },
    observacao: {
        type: DataTypes.STRING(100)
    },
    valor: {
        type: DataTypes.DECIMAL(10,2)
    },
    valorparte: {
        type: DataTypes.DECIMAL(10,2)
    },
}, {freezeTableName: true, timestamps: false})

Lancamento.belongsTo(Estabelecimento, {foreignKey: 'codestabelecimento'})
Lancamento.belongsTo(Usuario, {foreignKey: 'codusuario'})
Lancamento.belongsTo(Usuario, {foreignKey: 'codusuarioparte'})

module.exports = Lancamento