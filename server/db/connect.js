const configuredb = require("../config/config.json")
const mongoose = require("mongoose")

uri = "mongodb+srv://chamanpratapcps:MEWIVS1Y2c3721v2@dataneuron.xlec9nl.mongodb.net/DataNeuron?retryWrites=true&w=majority"

const connectDB = () =>{
    mongoose.connect(configuredb.mongodbUri)
    .then(()=> console.log("Connection to db successful"))
    .catch((err)=>console.log(err));
};

module.exports = connectDB;