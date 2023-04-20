module.exports = (sequelize,DataTypes)=>{
    const Model = sequelize.define('jsonDetails',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        data:{
            type:DataTypes.JSON
        }
    },{
        tableName:"jsonDetails",
        timestamps:true,
        paranoid:true,
        underscores:false
    })
 return Model;
}