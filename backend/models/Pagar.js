const { DataTypes } = require('sequelize')
const conn = require('../models/Connection')

const Empresa = require('./Empresa')
const FormaPagto = require('./FormaPagto')
const Pessoa = require('./Pessoa')

const Pagar = conn.define('Pagar', {
    codigo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    data: {
        type: DataTypes.DATEONLY
    },
    valor: {
        type: DataTypes.DECIMAL(10,2)
    },
    valorparte: {
        type: DataTypes.DECIMAL(10,2)
    },
    obs: {
        type: DataTypes.STRING(100)
    }
}, {freezeTableName: true, timestamps: false})

Pagar.belongsTo(Empresa, {constraints: true, foreignKey: 'codempresa'})
Empresa.hasMany(Pagar, {foreignKey: 'codempresa'})

Pagar.belongsTo(FormaPagto, {constraints: true, foreignKey: 'codformapagto'})
FormaPagto.hasMany(Pagar, {foreignKey: 'codformapagto'})

Pagar.belongsTo(Pessoa, {constraints: true, foreignKey: 'codpessoa'})
Pessoa.hasMany(Pagar, {foreignKey: 'codpessoa'})

Pagar.belongsTo(Pessoa, {constraints: true, foreignKey: 'codpessoaparte'})
Pessoa.hasMany(Pagar, {foreignKey: 'codpessoaparte'})

module.exports = Pagar

