var express = require('express')
var router = express.Router();

//Controllers----------------

let addressController = require('../controllers/address.controller');
let departmentController = require('../controllers/department.controller')
let employeeController = require('../controllers/employee.controller')
let jobController = require('../controllers/job.controller')
let leaveController = require('../controllers/leavedetails.controller');


router.post('/addAddress',addressController.addAddress);
router.post('/addDepartment',departmentController.addDepartment);
router.post('/addEmployee',employeeController.addEmployee);
router.post('/addJob',jobController.addJob);
router.post('/addleave',leaveController.addLeave);

module.exports=router;