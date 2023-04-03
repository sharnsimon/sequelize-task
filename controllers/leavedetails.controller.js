const { fn } = require('sequelize')
const {to,ReS,ReE} = require('../global_functions');
const LeaveDetails = require('../models').leavedetails;
require('../config/config');

const addLeave = async function(req,res){
    let [err,leave] = await to(LeaveDetails.create(
        {
           employeeId : req.body.employeeId,
           startDate : req.body.startDate,
            endDate : req.body.endDate,
            reason : req.body.reason
        }
    ))
    console.log("leave details",leave);
    if(err) return ReE(res,err,422);
    if(leave) return ReS(res,leave,200)
}

module.exports.addLeave = addLeave