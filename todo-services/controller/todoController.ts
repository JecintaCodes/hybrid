import express, {Request, Response } from "express"
import moment from "moment"
import crypto from "crypto"
import { Database } from "../utils/Database"
import { iTask } from "../utils/interfaces"

export const viewTask = (req:Request, res:Response):Response=>{
    try {
        return res.status(200).json({
            message: "list of tasks", data: Database
        })
    } catch (error) {
        return res.status(404).json({
            message: "error message",
            data: error
        })
        
    }
}
// create task
export const createTask = (req:Request, res:Response):Response=>{
    try {
        const {title} = req.body;
        const ID = crypto.randomUUID()
        let date = new Date()
        let Task:iTask = {
            id:ID,
            date: moment(date).format("LLL"),
            time: moment(date).fromNow(),
            title,
            complete:false
        }
        Database.push(Task)


        return res.status(201).json({
            message: "task created", data: Database
        })
    } catch (error) {
        return res.status(404).json({
            message: "error message",
            data: error
        })
        
    }
}

// getSingle task 
    export function getSingleTask({ req, res }: { req: Request; res: Response }): Response {
        try {
            const { id } = req.params
            const task = Database.filter((el: iTask) => {
                return el.id === id
            })
            return res.status(200).json({
                message: "Task deleted",
                data: task
            })

        } catch (error) {
            return res.status(404).json({
                message: "cant delete task", error
            })
        }
    }

// delete task 
export function deleteSingleTask({ req, res }: { req: Request; res: Response }): Response {
    try {
        const { id } = req.params
        const taskd = Database.filter((el: iTask) => {
            return el.id !== id
        })
        return res.status(200).json({
            message: "Task deleted",
            data: taskd
        })

    } catch (error) {
        return res.status(404).json({
            message: "cant delete task", error
        })
    }
}
export function updateSingleTask({ req, res }: { req: Request; res: Response }): Response {
    try {
        const { id } = req.params
        const task = Database.filter((el: iTask) => {
            return el.id === id
        })
        return res.status(201).json({
            message: "Task updated",
            data: task
        })

    } catch (error) {
        return res.status(404).json({
            message: "cant update task", error
        })
    }
}

