const mongoose = require("mongoose");


const employeeSchema = new mongoose.Schema({
    name:{
        type : String,
    },
    phone:{
        type : Number,
    },
    designation:{
        type : String,
    },
    salary:{
        type : Number,
    },
    city:{
        type : String,
    }
});


// module.exports = mongoose.model('Employee',employeeSchema)
const Employee = mongoose.model('Employee',employeeSchema)
module.exports = Employee