import express, { Request, Response } from "express";
import authModel from "../model/authModel";
import bcrypt from "bcrypt"
import { model } from "mongoose";

export const signUp = async(req:Request,res:Response):Promise<Response>=>{
    try {
        const {userName, email, password, confirmPassword, avatar} = req.body;

        const salt = await bcrypt.genSalt(10)
        const harsh = await bcrypt.hash(password,salt)

        const newUser = await authModel.create({
          userName, 
          email, 
          password:harsh, 
          confirmPassword:password, 
          avatar
        })
     
            return res.status(201).json({
                message:"user successfully signed in",
                data: newUser
            })
    } catch (error) {
        return res.status(400).json({
            message:"user not signed in",
        })
    }
}

export const signIn = async(req:Request,res:Response)=>{
    try {
        const {email, password} = req.body;
        const sign = await authModel.findOne({email});
        const signs = await bcrypt.compare(password,sign?.password!)
if (sign) {
    if(signs){
        return res.status(201).json({
            message:`welcome Back ${sign.userName}`,
            data: sign._id,
        });
    }else{
        return res.status(404).json({
            messae: "Incorrect Password",
        })
    }
    
} else {
    return res.status(404).json({
        messae: "user not found",
    })
}

    } catch (error) {
        return res.status(404).json({
            message:"please signIn"
        })
    }
}

export const findAllUsers = async(req:Request,res:Response)=>{
    try {
        const finds = await authModel.find().sort({
            createdAt: -1
        })
        return res.status(201).json({
            message:"users gotten",
            data: finds
           }) 
    } catch (error) {
       return res.status(404).json({
        message:"cant find users",
        data: error
       }) 
    }
}

export const findOneUser = async(req:Request,res:Response)=>{
    try {
        const {id} = req.params;
        const finds = await authModel.findById(id)
        return res.status(200).json({
            message:"user gotten",
            data: finds
           }) 
    } catch (error) {
       return res.status(404).json({
        message:"cant find user",
        data: error
       }) 
    }
}

export const UpdateUser = async(req:Request,res:Response)=>{
    try {
        const {id} = req.params;
        const {userName, avatar}=req.params;
        const finds = await authModel.findByIdAndUpdate(id,
            {userName, avatar},

            )
        return res.status(201).json({
            message:"user updated",
            data: finds
           }) 
    } catch (error) {
       return res.status(404).json({
        message:"cant find updated User",
        data: error
       }) 
    }
}

export const deleteUser = async(req:Request,res:Response)=>{
    try {
        const {id} = req.params;
        const finds = await authModel.findByIdAndDelete(id)
        return res.status(201).json({
            message:"user deleted",
            data: finds
           }) 
    } catch (error) {
       return res.status(404).json({
        message:"cant delete user",
        data: error
       }) 
    }
}
