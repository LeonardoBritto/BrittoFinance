const { DataTypes } = require('sequelize')
const conn = require('../models/Connection')

const Categoria = require('./Categoria')

const Empresa = conn.define('Empresa', {
    codigo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    razao: {
        type: DataTypes.STRING(30)
    },
    fantasia: {
        type: DataTypes.STRING(30)
    },    
}, {freezeTableName: true, timestamps: false})

Empresa.belongsTo(Categoria, {constraints: true, foreignKey: 'codcategoria'})
Categoria.hasMany(Empresa, {foreignKey: 'codcategoria'})

module.exports = Empresa