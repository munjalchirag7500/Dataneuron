require("dotenv").config();
const uri = require("./config/config.json")
const connectDB = require("./db/connect");
const Details = require("./models/details");

const DetailsJson = require("./details.json");
const start = async () =>{
    try { 
        await connectDB();
        await Details.create(DetailsJson);
        console.log("success")
    } catch (error) {
        console.log(error)
    }
}
start();