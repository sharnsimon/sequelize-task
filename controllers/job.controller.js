const { fn } = require('sequelize')
const {to,ReS,ReE} = require('../global_functions');
const JobDetails = require('../models').jobdetails;
require('../config/config');

const addJob = async function(req,res){
    let [err,job] = await to(JobDetails.create(
        {
          employeeId:req.body.employeeId,
          designation:req.body.designation,
          departmentId:req.body.departmentId,
          doj:req.body.doj,
          salary:req.body.salary
        }
    ))
    console.log("Job Details",job)
    if(err) return ReE(res,err,422)
    if(job) return ReS(res,job,200)
}

module.exports.addJob = addJob