import mongoose from  "mongoose"
import dotenv from "dotenv"
dotenv.config()


const bLOGdb:string = process.env.MONGOSTRING!

export const DataBase = async() =>{
        mongoose.connect(bLOGdb).then(()=>{
            console.log(`Database is connected on ${bLOGdb}`)
        })
}