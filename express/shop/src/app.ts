import express, { Application } from "express"
import cors from "cors"




function appConfiq(app: Application){
    app.use(express.json())
    app.use(cors())
    
}

function cors(): any {
    throw new Error("Function not implemented.")
}
