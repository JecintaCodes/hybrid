import express, { Application } from "express";
import { mainApp } from "./app/mainApp";
import { authDb } from "./config/authDb";
import dotenv from "dotenv"
dotenv.config()
const realPort: number = parseInt(process.env.NEWPORT!)
const port:number = realPort
const app:Application = express();
mainApp(app)
const server = app.listen(port, ()=>{
  console.log("")
  authDb()
  // console.log(authDb)
  console.log(`server is live on ${port}.....`);
})

process.on("uncaughtException",(err:any)=>{
  console.log("server is shutting down due to uncaughtException error");
  console.log("uncaughtException", err);

  process.exit(1);
})
process.on("unhandledRejection",(reason:any)=>{
  console.log("server is shutting down due to uncaughtException error");
  console.log("unhandledRejection", reason);

 server.close(()=>{
  process.exit(1);
 })
})