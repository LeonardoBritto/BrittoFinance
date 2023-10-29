const { DataTypes } = require('sequelize')
const conn = require('../db/Connection')

const Categoria = require('./Categoria')

const Estabelecimento = conn.define('Estabelecimento', {
    codigo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    razaosocial: {
        type: DataTypes.STRING(30)
    },
    nomefantasia: {
        type: DataTypes.STRING(30)
    }
}, {freezeTableName: true, timestamps: false})

Estabelecimento.belongsTo(Categoria, {foreignKey: 'codcategoria'})

module.exports = Estabelecimento