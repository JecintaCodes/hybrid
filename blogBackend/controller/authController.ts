import express, { Request, Response } from "express"
import authModel from "../model/authModel";
import bcrypt from "bcrypt"

export const viewOneUser = async(req:Request,res:Response)=>{
    try {
        const {id}= req.params
        const view = await authModel.findById(id)

        return res.status(200).json({
            message: "userGotten",
            data: view
        })
    } catch (error) {
        return res.status(400).json({
            message: "user not Gotten",
            data: error
        })
    }
}
export const viewAllUser = async(req:Request,res:Response)=>{
    try {
        // const {id}= req.params
        const view = await authModel.find()

        return res.status(200).json({
            message: "userGotten",
            data: view
        })
    } catch (error) {
        return res.status(400).json({
            message: "user not Gotten",
            data: error
        })
    }
}

export const updateOneUser = async(req:Request,res:Response)=>{
    try {
        const {id}= req.params
        const view = await authModel.findByIdAndUpdate(id)

        return res.status(201).json({
            message: "user Updated",
            data: view
        })
    } catch (error) {
        return res.status(404).json({
            message: "user not Updated",
            data: error
        })
    }
}

export const deleteOneUser = async(req:Request,res:Response)=>{
    try {
        const {id}= req.params
        const view = await authModel.findByIdAndDelete(id)

        return res.status(200).json({
            message: "user deleted",
            data: view
        })
    } catch (error) {
        return res.status(404).json({
            message: "user not deleted",
            data: error
        })
    }
}

export const createUser = async(req:Request,res:Response)=>{
    try {
        const {password, userName, avatar, email,confirmPassword, avatarID}= req.body;
const salt = await bcrypt.genSalt(10)

const harsh = await bcrypt.hash(password,salt)

        const create = await authModel.create({
            password: harsh, 
            userName, 
            avatar, 
            email,
            confirmPassword:password,
             avatarID 
        })

        return res.status(201).json({
            message: "user created",
            data: create
        })
    } catch (error) {
        return res.status(404).json({
            message: "user not created",
            data: error
        })
    }
}
export const signInUser = async(req:Request,res:Response)=>{
    try {
        const {password,email}= req.body;

        const user = authModel.findOne({email})

            if (user) {
                const passed = await bcrypt.compare(password,user?.password)
               if(passed){
                return res.status(201).json({
                    message: `welcome Back ${user.userName}`,
                    
                })
               } else{
                return res.status(404).json({
                    message: "incorrect Password",
                    
                })
               }
            } else {
                return res.status(404).json({
                    message: "user not created",
                    
                })
            }

    } catch (error) {
        return res.status(404).json({
            message: "user not created",
            data: error
        })
    }
}