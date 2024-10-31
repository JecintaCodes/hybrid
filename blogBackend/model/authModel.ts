import mongoose from "mongoose";
import { iAuth } from "../utils/interface";

interface iAuthData extends iAuth, mongoose.Document{}

const authModel = new mongoose.Schema({
    userName:{
        type:String,
        require: true,
    },
    email:{
        type:String,
        require: true,
        unique: true,
    },
    password:{
        type:String,
        require: true,
    },
    confirmPassword:{
        type:String,
        require: true,
    },
    avatar:{
        type:String,
        
    },
    avatarID:{
        type:String,
       
    },
},
{timestamps: true}

)

export default mongoose.model<iAuthData>("auths", authModel)