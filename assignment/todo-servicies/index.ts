import express, { Application, Request, Response } from "express"
import cors from "cors"
import moment from "moment"
import todo from "./Router/utils"

const port:number = 5000
const app:Application = express()

app.use(cors())
app.use(express.json())
app.use("/api/todo", todo)

app.get("/")

export const server = app.listen(port,()=>{
    console.log("Server is live......");
})

process.on("uncaughtException", (err:any)=>{
    console.log("server is shutting down due to uncaught exception");

    console.log("uncaughtException", err);
    process.exit(1);
})

process.on("unhandledRejection",(reason:any)=>{
    console.log("server is shutting down due to unhandled rejection");

    server.close(()=>{
        process.exit(1);
    })
})