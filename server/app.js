require("dotenv").config();
const express = require('express');
const app = express();
const connectDB = require("./db/connect");
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.PORT || 4200;

const details_routes = require("./routes/details");


app.use(cors());
app.use(bodyParser.json());
app.use("/api/employee_details",details_routes);
app.use("/api/addemployee",details_routes);
app.use("/api/updateuser",details_routes);
app.use("/api/getuser",details_routes);

const start = async () =>{
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`${PORT} Yes I am connected`);
        });
    } catch (error){
        console.log(error);
    }
}
start();