const express = require('express');
const router = express.Router();

const { 
    getAllEmployeeDetails,
    addEmployeeDetails,
    updateUserDetails,
    getEmployeeDetail
} = require("../controllers/details");


router.route("/").get(getAllEmployeeDetails);
router.route("/:id").get(getEmployeeDetail)
router.route("/").post(addEmployeeDetails);
router.route("/:id").patch(updateUserDetails);
// router.route("/addEmployee").post(addEmployeeDetails);

module.exports = router; 