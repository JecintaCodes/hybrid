import express, { Application, Request, Response } from "express";
require("./config/bookDataBase")
import book from "./router/bookstoreRouter"



const port:number = 3333;
const app:Application = express();

app.use(express.json());
app.use("/book",book)
app.get("/", (req:Request,res:Response)=>{
    try {
         res.status(200).json({
            message: "api is live...",
            
        })
    } catch (error) {
         res.status(404).json({
            message: "not Found",
            data: error
        })
        
    }
});

const server = app.listen(port, ()=>{
    console.log("server is listening.....",port)
});


