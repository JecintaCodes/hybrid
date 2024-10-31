import express, { Application, Request, Response } from "express"
import cors from "cors"
import todo from "./router/todoRouter"
import student from "./router/serviceRouter"
const port:Number = 1000
const app:Application = express();

app.use(cors())
app.use(express.json())
app.use("/api/todo/",todo)

app.get("/", (req:Request,res:Response):Response=>{
    try {
        return res.status(200).json({
            message: "i am live....."
        })
    } catch (error) {
        return res.status(404).json({
            message: "error message"
        })
    }
})

const server = app.listen(port, ()=>{
    console.log("server is listing.......");
})

process.on("uncaughtException", (err:any)=>{
    console.log("server is shutting down due to uncaughtException");

    console.log("uncaughtException", err);
    process.exit(1);
})

process.on("unhandledRejection", (reason:any)=>{
    console.log("server is shutti ng down because of the unhandledRejecton");
    
    console.log("unhandledRejectoin", reason);
  server.close(()=>{
    process.exit(1);
  })
})