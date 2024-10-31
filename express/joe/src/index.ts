import express, { Application } from "express"


const port:number = 1000
const app:Application = express.json()

app.use(express.json()).get("/")

app.listen(port ,()=>{
    console.log("server is up and running......",port)
})

