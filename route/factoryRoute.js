// import express
const express = require('express');
//extract the router object from express

const router = express.Router();

// import the functions from the controller module

const staffController = require('../controller/factoryController');
const { validateStaff } = require('../middleware/factoryMiddleware');
const validateObjectId=require('../middleware/objectId')


// end points

router.route("/")
.post(validateStaff,staffController.createStaff)//create a new user route
.get(staffController.getAllStaffInfo)//get all staffs

router.route("/:id")
.put(validateObjectId,staffController.updateStaff)//update staff
.delete(validateObjectId,staffController.replaceStaff)//replace a staff
.get(validateObjectId,staffController.getStaffInfo)//get a staff info
.patch(validateObjectId,staffController.replaceAStaff)


router.post("/:id/resume", validateObjectId, staffController.logResumptionTime);//staff check in
router.post("/:id/close", validateObjectId, staffController.logClosureTime); //staff check out

router.post("/:id/seeclose", validateObjectId, staffController.closeTime);
router.post("/:id/seeResume", validateObjectId, staffController.resumeTime);







module.exports = router;
