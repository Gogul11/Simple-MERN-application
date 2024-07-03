import express, { json } from "express"
import mongoose from "mongoose"
import cors from "cors"     

import { PORT, mongourl } from "./value.js"    //Importing port number and mongourl
import { Userdata } from "./model.js"       //Importing user model from model.js


const app = express()       //setting express instance

app.use(json())
app.use(cors())

//Default route
app.get("/", (req, res) => {
    res.status(200).json(`This is the home page from backend`)      
})

//This route is for viewing data in the database
app.get("/data", async (req, res) => {
    try{
        const data = await Userdata.find({},{name:true, email:true, _id:false})
        res.status(200).json(data)
    }
    catch(err){
        console.log(err.message)
    }
})

//This route is for posting data to the database
app.post("/data/add", async (req, res) => {

    try{
        const Newdata = req.body
        const data = await Userdata(Newdata)
        data.save()
        res.status(200).json(data)
    }
    catch(err){
        console.log(err.message)
    }

})

//Connecting mongodb
mongoose.connect(mongourl)
.then(
    app.listen(PORT, () => {
        console.log(`The server is running on ${PORT}`)
        console.log("Database connection established")
    })
)
.catch(err => console.log(err.message))
