import express, { Application, Request, Response } from "express"
import doneTaskModel from "../model/task Model"



export const donecreateTask = async(req:Request,res:Response):Promise<Response>=> {
    try {
        const {task, priority} = req.body

        const tasked = await doneTaskModel.create({
            task,
            priority,
        })
        return res.status(201).json({
            message: "task created",
            data: tasked
        })
        
    } catch (error) {
        return res.status(404).json({
            message:"task not created"
        })
        
    }
};

export const donegetTask = async(req:Request,res:Response):Promise<Response>=> {
    try {
        console.log("Statrt")
        const getall = await doneTaskModel.find()
       

        return res.status(201).json({
            message: "task gotten",
            data: getall
        })
        
    } catch (error) {
        return res.status(404).json({
            message:"task not gotten"
        })
        
    }
}

export const donegetOnetask = async(req:Request,res:Response):Promise<Response>=> {
    try {
        const {id} = req.params
        const getOne = await doneTaskModel.findById(id)

        return res.status(201).json({
            message: "one task gotten",
            data: getOne
        })
        
    } catch (error) {
        return res.status(404).json({
            message:"one task not gotten"
        })
        
    }
}

export const doneupdateOneTask = async(req:Request,res:Response):Promise<Response>=> {
    try {
        const {id} = req.params;
        const update = await doneTaskModel.findByIdAndUpdate(
            id,
            {
                isComplete:true,
            },
            {new: true},
        )

        return res.status(201).json({
            message: "task updated",
            data: update
        })
        
    } catch (error) {
        return res.status(404).json({
            message:"task not updated"
        })
        
    }
}
export const doneDeleteOneTask = async(req:Request,res:Response):Promise<Response>=> {
    try {
        const {id} = req.params;
        const delet = await doneTaskModel.findByIdAndDelete(id)

        return res.status(201).json({
            message: "task deleted",
            data: delet
        })
        
    } catch (error) {
        return res.status(404).json({
            message:"task not deleted"
        })
        
    }
}