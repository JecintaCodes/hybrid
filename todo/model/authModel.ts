import mongoose from "mongoose";

export interface iAuth{
   
    userName: string
    email: string
    password: string
    avatar?: string
    confirmPassword:string
}

interface iAuthData extends iAuth, mongoose.Document {}

const authModel = new mongoose.Schema(
    {
        userName:{
            type: String,
            trim: true,
            required: true,
        },

        email:{
            type: String,
            unique:true,
            required: true,
        },
        password:{
            type: String,
            
            required:true,
            
        },
        
        confirmPassword:{
            type: String,
            
            required:true,
            
            
        },
        
        avatar:{
            type: String,
           
        }
    },
    { timestamps: true},
)

export default mongoose.model<iAuthData>("auths",authModel)