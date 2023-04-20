module.exports=(sequelize,DataTypes)=>{
    const Model= sequelize.define('leavedetails',{  //this table name will be stored in plural form
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
            type:DataTypes.DATE,
            allowNull:false
        },
        endDate:{
            type:DataTypes.DATE,
            allowNull:false 
        },
        reason:{
            type:DataTypes.STRING,
            allowNull:false
        }
    },
    {
        tableName:'leavedetails', //the table name which is stored in plural form can be modified here
        timestamps : true,
        paranoid : true,
        underscored : false,
    });
    Model.associate= function(models){
        this.employeeId=this.belongsTo(models.employee)
    }

    return Model;
}