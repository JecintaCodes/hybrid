import mongoose from "mongoose"
import iAuth from "../utils/Interface"

interface iAuths extends iAuth , mongoose.Document{}

const authModel = new mongoose.Schema({
    userName:{
        type:String,
        require: true,
    },
    email:{
        type:String,
        require: true,
        trim: true,
    },
    password:{
        type:String,
        require: true,
    },
    avatar:{
        type:String,
        require: true,
    },
}, {timestamps:true,}
)
export default mongoose.model<iAuths>("auths", authModel)