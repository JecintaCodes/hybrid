import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

const authDB:string = process.env.NEWSTRING!

export const authDb = async()=>{
    mongoose.connect(authDB).then(()=>{
        console.log(`db connected on ${authDB}`)
    })
}