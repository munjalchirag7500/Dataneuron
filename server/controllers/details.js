// const EmployeeSchema = require("../models/details");
const Employee = require("../models/details");

const addEmployeeDetails = async(req,res) => {
    try{
        const newEmployee = new Employee(req.body);
        await newEmployee.save();
        res.status(200).json({msg:'add employee', employee:newEmployee});
    }catch(error) {
        console.log(error)
    }
}

const getAllEmployeeDetails = async(req,res) => {
    const empData = await Employee.find({});
    res.status(200).json({empData});
};

const getEmployeeDetail = async(req,res) => {
  const {id} = req.params
  const empData = await Employee.findById(id);
  res.status(200).json({empData});
};


const updateUserDetails = async(req,res) =>{
    try {
        const { id } = req.params;
        const filter = { _id: id };
        const update = req.body;
        const options = { new: true };
     
        const updatedEmployee = await Employee.findByIdAndUpdate(filter, update, options);
        console.log(updatedEmployee);
        if (!updatedEmployee) {
          return res.status(404).json({ error: 'Employee not found' });
        }
     
        res.status(200).json({ message: 'Employee updated successfully', employee: updatedEmployee });
      } catch (error) {
        console.error('Error updating employee:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}




module.exports = {getAllEmployeeDetails,addEmployeeDetails,updateUserDetails,getEmployeeDetail};