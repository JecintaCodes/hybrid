import express, {Application, Response,Request} from "express"
import cors from "cors"
import student from "./router/authRouter"
import { viewAuth } from "./controller/authController"

const port: number = 2000
const app:Application = express()

app.use(cors())
app.use(express.json())
app.use("api/student", student)

app.get("/", (req:Request, res:Response):Response=>{
    try {
     return res.status(200).json({
        message: "api is live....."
        })
    } catch (error) {
        return res.status(404).json({
            message: "error message "
        })
}
})

// app.post("/create",(req:Request, res:Response):Response=>{
//     try {
//         res.status(200).json({
//             message: ""
//         })
//     } catch (error) {
        
//     }
// })

const server = app.listen(port, ()=>{
    console.log("Server is live......");
})

process.on("uncaughtExpected", (err:any)=>{
    console.log("server is shutting due to uncaughtExpected error");

    console.log("uncaughtExpected", err);
    process.exit(1);
})

process.on("unhandledRejection", (reason:any)=>{
console.log("server is shutting down due to unhandledRejection");
server.close(()=>{
    process.exit(1);
})
})