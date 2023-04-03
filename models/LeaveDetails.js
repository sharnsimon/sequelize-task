module.exports=(sequelize,DataTypes)=>{
    const Model= sequelize.define('leavedetails',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        employeeId:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        startDate:{
            type:DataTypes.STRING,
            allowNull:false
        },
        endDate:{
            type:DataTypes.STRING,
            allowNull:false
        },
        reason:{
            type:DataTypes.STRING,
            allowNull:false
        }
    },
    {
        tableName:'leavedetails',
        timestamps : true,
        paranoid : true,
        underscored : false,
    });
    Model.associate= function(models){
        this.employeeId=this.belongsTo(models.employee)
    }

    return Model;
}