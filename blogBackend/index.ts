import express,{Application} from "express"
import { mainApp } from "./app/mainApp"
import dotenv from "dotenv"
import { DataBase } from "./config/DataBase"
dotenv.config()

const realPort = parseInt(process.env.PORTS!)
const port:number = realPort
const app:Application = express()
mainApp(app)


const server = app.listen(port,()=>{
    DataBase()
    console.log(`servr is listening to${port}`)
})

process.on("uncaughtException",(err:any)=>{
    console.log("server is shutting down due to uncaughtException")
    console.log("uncaughtException",err)
    process.exit(1);
})
process.on("unhandledRejection",(reason:any)=>{
    console.log("server is shutting down due to unhandledRejection")
    console.log("unhandledRejection",reason)
   
    server.close(()=>{
         process.exit(1);
    })
})