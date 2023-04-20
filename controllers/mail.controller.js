const mailService = require('../services/mail.service')
const { fn,col } = require('sequelize')
const {to,ReS,ReE,TE} = require('../global_functions');
const employeeLogin = require('../models').employeelogin;
require('../config/config');
const createSignup = async function(req,res){
    let body = req && req.body ? req && req.body:null;
    console.log(body)
    let err,employeeData,error,signupMail;
    if(body){
        [err,employeeData] = await to(employeeLogin.create(req.body));
        if(err) return ReE(res,err,422);
        if(employeeData){
            [error,signupMail] = await to(mailService.sendMail(body.Email,
                '<h1> hii %employeeName% </h1><p>your mail %Email% has been registered.</p><br><h4>Have a nice day %employeeName%</h4>',{
                    employeeName : body.Name,
                    Email: body.Email
                })) 
                if(error) return ReE(res,error,422)
                
            }
            if(signupMail) return ReS(res,{employeeData},200)
            
        }
}
module.exports.createSignup = createSignup