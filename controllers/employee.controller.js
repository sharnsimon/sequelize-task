const { fn } = require('sequelize') 
const {to,ReS,ReE} = require('../global_functions');
const Employee = require('../models').employee;
const JobDetails = require('../models').jobdetails;
require('../config/config');

const { Op } = require('sequelize')

const addEmployee = async function(req,res){
    let [err,employee] = await to(Employee.create(
        {
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            dob:req.body.dob,
            salaryDetails:req.body.salaryDetails
            
        }
    ))
    console.log('Employee Details',employee);
    if(err) return ReE(res,err,422);
    if(employee) return ReS(res,employee,200)
}

module.exports.addEmployee = addEmployee

const getEmployeeJobDetails = async function(req,res){
    let [err,data] = await to(Employee.findAll({
        include:{
            model : JobDetails}
            // where condition missing
    }

    ))
    console.log(data)
    if(err) return ReE(res,err,422);
    if(data) return ReS(res,data,200);
}

module.exports.getEmployeeJobDetails= getEmployeeJobDetails

const getEmployeeBySalary = async function(req,res){
    let [err,empId]= await to(JobDetails.findAll({
        attributes:['employeeId'],
        where:{
            salary:{
                [Op.gt]:25000 //ChatGPT
            }
        }
    }))
    console.log(empId)
    const empIds = empId.map(dataValues => dataValues.employeeId); //ChatGPT

    console.log(empIds)
    if(err) return ReE(res,err,422)

    let[errr,data]=await to(Employee.findAll({
        attributes:['firstName','lastName'],
        where:{
            id:empIds
        }
    }))
    console.log(data)
    if(errr) return ReE(res,errr,422)
    if(data) return ReS(res,data,200)
}
module.exports.getEmployeeBySalary = getEmployeeBySalary


const netPay = async function(req,res){
    let[errSal,salary] = await to(Employee.findAll({
        attributes:['id','firstName','salaryDetails']
    }));
    if(errSal) return ReE(res,err,422)
    if(salary && salary.length){
        
        let netSalary = salary.map(emp =>{
            let sal = emp.salaryDetails;
            let PF = sal.PF?sal.PF:0;
            let PT = sal.PT?sal.PT:0;
            let ESI = sal.ESI?sal.ESI:0;
            let cess=sal.cess?sal.cess:0;
            let basic=sal.basic?sal.basic:0;
            let HRA=sal.HRA?sal.HRA:0;
            let incomeTax=sal.incomeTax?sal.incomeTax:0;
            let specialAllowance=sal.specialAllowance?sal.specialAllowance:0;
            let netSal = ((basic+HRA+specialAllowance)-(PF+PT+ESI)-(incomeTax+cess))
            return {emp,netSal};
        })
        if(netSalary) return ReS(res,netSalary,200)
        
    }
}
module.exports.netPay=netPay;