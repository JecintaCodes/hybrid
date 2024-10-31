import mongoose from "mongoose"
import { iAuth } from "../utils/Interface";


interface iAuthData extends iAuth, mongoose.Document{}

const authModel = new mongoose.Schema({
    userName:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
        unique: true,
        trim:true,
        toLowercase: true,
    },
    password:{
        type: String,
        require: true,
    },
   avatar:{
        type: String,
       
    },
   avatarID:{
        type: String
       
    },
   friend:{
        type: Array<String>,
       
    },
   request:{
        type: Array<String>,
       
    },
  
    article:[
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: "articles"
        },
    ]
}, 
{
    timestamps:true
}

)


export default mongoose.model<iAuthData>("auths", authModel)