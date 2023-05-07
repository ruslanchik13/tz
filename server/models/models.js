const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Articles = sequelize.define('articles', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.TEXT, allowNull: false},
    body: {type: DataTypes.TEXT, allowNull: false},
    dateOfCreate: {type: DataTypes.DATE, allowNull: false},
    dateOfModification: {type: DataTypes.DATE, allowNull: false}
})

const Comments = sequelize.define('comments', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    body: {type: DataTypes.TEXT, allowNull: false},
    dateOfCreate: {type: DataTypes.DATE, allowNull: false},
    dateOfModification: {type: DataTypes.DATE, allowNull: false}
})

Articles.hasMany(Comments)
Comments.belongsTo(Articles)

module.exports = {
    Articles, Comments
}