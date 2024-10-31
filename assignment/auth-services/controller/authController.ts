import express, {Application, Request, Response} from "express"   
import {iData} from "../utils/interface"
import {Database} from "../utils/Database"
import crypto from "crypto"
import router from "../router/authRouter"
export const ViewHuman =((req:Request, res:Response):Response=>{
    try {
        return res.status(200).json({
            message: "api is live....",
            data:Database
        })
    } catch (error) {
        return res.status(404).json(
           {
            message:"error code",
            data: error
           }
        )
    }
})

export const regHumman = (req:Request, res: Response)=>{
    try {
        const {name, age, id} = req.body;
       const ID1 = crypto.randomUUID();

        let newData:iData = {
           id:ID1,
            name,
            age,
            
        }
Database.push(newData)


    return res.status(404).json({
        message:"registered",
        data: newData
    })
        
    } catch (error) {
        return res.status(404).json({
            message:"not reg",
            data: error
        })
    }
}

export const getSingle=(req:Request,res:Response)=>{
    try {
        const {id} = req.params;
let student = Database.filter((el:iData)=>{
    return el.id===id;
})
return res.status(404).json({
    message: "single student gotten",
    data:student
})

    } catch (error) {
      
            return res.status(404).json({
                message:"not gotten",
                data: error
            })
    }
}

export const deleteHuman = (req: Request, res:Response)=>{
    try {
        const {id}=req.params
        let student1 = Database.filter((el:iData)=>{
            return el.id!==id
        })
        return res.status(200).json({
            message: "deleted successfully",
            dataa:student1
        })
    } catch (error) {
        return res.status(404).json({
            message: "not deleted",
            data: error
        })
    }
}

export const updateHumanReg = (req:Request, res:Response)=>{
    try {
       const {id}= req.params   
       
       const {name, age}=req.body
       const mainID = parseInt(id)-1
       Database[mainID].name=name
       Database[mainID].age=age

       return res.status(201).json({
        message:"updated",
        data: Database
       })
    } catch (error) {
        return res.status(404).json({
            message: "not updated",
            data: error
        })
    }
}

