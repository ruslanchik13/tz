const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Articles = sequelize.define('articles', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.TEXT},
    body: {type: DataTypes.TEXT},
    createdAt: {type: DataTypes.DATE},
    updatedAt: {type: DataTypes.DATE, nullable: true}
})

const Comments = sequelize.define('comments', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    articleId: {type: DataTypes.INTEGER},
    body: {type: DataTypes.TEXT, allowNull: false},
    createdAt: {type: DataTypes.DATE},
    updatedAt:{type: DataTypes.DATE},

})

Articles.hasMany(Comments, {as: 'comments', foreignKey: 'articleId'})
Comments.belongsTo(Articles, {as: 'articles', foreignKey: 'articleId'})


module.exports = {
    Articles, Comments
}