const { fn } = require('sequelize')
const {to,ReS,ReE} = require('../global_functions');
const Employee = require('../models').employee;
require('../config/config');

const addEmployee = async function(req,res){
    let [err,employee] = await to(Employee.create(
        {
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            dob:req.body.dob
        }
    ))
    console.log('Employee Details',employee);
    if(err) return ReE(res,err,422);
    if(employee) return ReS(res,employee,200)
}

module.exports.addEmployee = addEmployee