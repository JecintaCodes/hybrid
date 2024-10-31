import express, {Application,Request,Response} from "express"
import moment from "moment"
import DataBase from "../utils/DataBase"
import { iTask } from "../utils/Interface"

export const Viewtask = (req:Request,res:Response)=>{
    try {
        return res.status(200).json({
            message: "api is live",
            data: DataBase
        })
    } catch (error) {
        return res.status(404).json({
            message: "error",
            data: error
        })
    }
}
export const createTask = (req:Request,res:Response)=>{
    try {
const {title}=req.body;

const ID = crypto.randomUUID()
const newDate = new Date()

const newData:iTask={
    id:ID,
    title,
    time: moment(newDate).fromNow(),
    date: moment(newDate).format("LLL"),
    complete:false
}
DataBase.push(newData)

        return res.status(200).json({
            message: "api is live",
            data: DataBase
        })
    
} catch (error) {
        return res.status(404).json({
            message: "error",
            data: error
        })
    }
}

export const updateTask = (req: Request, res:Response)=>{
    try {
        const {id} = req.params;
       const Task = DataBase.filter((el:iTask)=>{
            return el.id === id ? (el.complete=true): null
        })
        return res.status(201).json({
            message: "task updated",
            data:Task
        })
    } catch (error) {
        return res.status (404).json({
            message: "is not updated",
            data: error
        })
    }
}

export const deleteTask = (req: Request, res:Response)=>{
    try {
        const {id} = req.params;
       const Task = DataBase.filter((el:iTask)=>{
            return el.id !== id ? (el.complete=true): null
        })
        return res.status(201).json({
            message: "task deleted",
            data:Task
        })
    } catch (error) {
        return res.status (404).json({
            message: "is not deleted",
            data: error
        })
    }
}

export const singleTask = (req:Request, res:Response)=>{
    try {
        const {id} = req.params
        const Task = DataBase.filter((el:iTask)=>{
            return el.id !== id ? (el.complete=true): null
        }
        return res.status(200).json({
            message:"get it"
            data: task
        })
    } catch (error) {
        return res.status(404).json({
            message: "error single",
            data:error
        })
    }
}