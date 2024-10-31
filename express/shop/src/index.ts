import express, { Application } from "express"

// const port:number = 1000
// const app:Application = express()

// app.use(express.json())


// app.listen(port,()=>{
//     console.log("server is up and running")
// })


const app = express()
const port = 1000


const server = async () =>{
    try {
        app.listen(port,()=>{
        console.log(`server is listening on${port}`)
        })
    } catch (error:any) {
        console.log(error)
    }
}