import express, { Application } from "express"
import cors from "cors"
import task  from "./router/taskRouter"
import doneRouter from "./router/doneTaskRouter"
import authRouter from "./router/authRouter"

export const mainApp = (app:Application)=> {
    app.use(express.json())
    app.use(cors())
    app.use('/api/v1/task',task)
   app.use("/api/v1/done", doneRouter)
    // app.use("/api/v1/auth",authRouter);
    app.use("/api/v1/authRouter",authRouter)
}