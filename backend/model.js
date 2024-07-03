import mongoose from "mongoose";


//Creating schema for the database
const DatabaseSchema = new mongoose.Schema(
    {
        name : {
            type: String,
            required : true
        },
        email : {
            type: String,
            required: true
        }
    },
    {
        timestamps : true
    }
)

//Creating user model
export const Userdata = mongoose.model("Userdata", DatabaseSchema)