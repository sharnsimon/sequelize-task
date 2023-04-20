const jsonDetails = require('../models').jsonDetails
const { to,ReS,ReE } = require('../global_functions')

const addDetails = async function(req,res){
    let [ err, Details] = await to(jsonDetails.create(
        req.body
    ))
    console.log(Details);
    if(err) return ReE(res,err,422)
    if(Details) return ReS(res,Details,200)
}

module.exports.addDetails = addDetails