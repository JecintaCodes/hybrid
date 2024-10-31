import express, { Application, Request, Response } from "express"
import cors from "cors"
import router from "./router/authRouter"

const port:number = 5000
const app:Application = express()


app.use(cors())
app.use(express.json())

app.get("/")
app.get("/api",router)

export const server = app.listen(port,()=>{
    console.log("server is life");
})

process.on("uncaughtException",(err:any)=>{
    console.log("uncaught error");

    console.log("uncaughtException", err);
    process.exit(1);
})

process.on("unhandledRejection", (reason:any)=>{
    console.log("unhandledRejection", reason);

    console.log("unhadled rejection");
    
        process.exit(1);
   
})