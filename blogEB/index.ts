import express, { Application } from "express"
import cors from "cors"
import mongoose from "mongoose"
import articleRouter from "./router/articleRouter"

const BlogBase:string ="mongodb://127.0.0.1:27017/CompleteBlogDataBase"

const app: Application = express()
const port:number = 2222

app.use(express.json())
app.use(cors({
    origin:"http://localhost:3000",
    methods:["GET, POST, PATCH DELETE"],
}),
);
app.use("api/v1",articleRouter)

app.listen(port, ()=>{
    mongoose.connect(BlogBase).then(()=>{
        console.log();
        console.log("server is life on post man.......")
    })
    .catch((error)=>{
        console.log(error);
    });

});