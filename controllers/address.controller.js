const { fn } = require('sequelize')
const {to,ReS,ReE} = require('../global_functions');
const Address = require('../models/AddressDetails').addressdetails;
require('../config/config');

const addAddress = async function(req,res){
    let [err,address] = await to(Address.create)
}