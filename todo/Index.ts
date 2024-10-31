import express, { Application, Request,Response } from "express"
import { mainApp } from "./mainApp"
import { dbConnect } from "./config/Db"
//for security
import dotenv from "dotenv"  
dotenv.config()

const realPort:number = parseInt(process.env.APPLICATION_PORT!)
55 
const port:number = realPort
const app:Application = express()
// MODULA UTILITY
//middle man 
mainApp(app)

export const server = app.listen(port, () => {
    console.log("")
    dbConnect()
    console.log("server is listening.....",port)
})

process.on("uncaughtException", (err:any)=>{
    console.log("server is shutting down due to uncaughtException")
    console.log("uncaughtException",err)

    process.exit(1);
})
process.on("unhandledRejection", (reason:any)=>{
    console.log("server is shutting down due to unhandledRejection")
    console.log("unhandledRejection",reason)

    process.exit(1);
})