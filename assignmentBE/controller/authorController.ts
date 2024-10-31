import express, { Request, Response } from "express"
import authorModel from "../model/authorModel"
import cloudinary from "../config/Cloudinary"


export const createAuthor = async(req:Request, res:Response)=> {
    try { 

        const {userName, email, password} = req.body;


const {secure_url,public_id} = await cloudinary.uploader.upload(req.file?.path!)

        const newAuthor:any = await authorModel.create({
            userName,
            email,
            password, 
            avatar : secure_url,
            avatarID: public_id,
        })
        
        // console.log(newUser)
        return res.status(201).json({
            message: "user created",
            data: newAuthor
        })
    } catch (error) {
        
console.log(error)
        return res.status(404).json({
            message: "cant create user",
            data: error.message
                
            })
            
            
        }
}

export const signInAuthor = async(req:Request, res:Response)=> {
    try {

        const { email, password} = req.body;
        const sign = await authorModel.findOne({email})

        if (sign){
            return res.status(201).json({
                message:`welcome ${sign.userName}`,
                data: sign._id
            })
        }else{
            
        return res.status(404).json({
            message: "email or password wrong "
        
        })
        }
        

    } catch (error) {
        
        return res.status(404).json({
            message: "cant signIn please SignUp",
            data: error.message
                
            })
            
            
 }}

export const findAuthors = async(req:Request, res:Response)=>{
    try {
        const find = await authorModel.find()

        return res.status(200).json({
            message:"all Authors gotten",
            data: find
           }) 

    } catch (error) {
       return res.status(404).json({
        message:"cant find Authors",
        data: error.message
       }) 
    }
}

export const findOneAuthors = async(req:Request, res:Response)=>{
    try {

        const {authorID} = req.params;
        const find = await authorModel.findById(authorID)

        return res.status(200).json({
            message:"one Authors gotten",
            data: find
           }) 

    } catch (error) {
       return res.status(404).json({
        message:"cant find Author",
        data: error.message
       }) 
    }
}

export const updateAuthor = async(req:Request, res:Response)=>{
    try {

        const {userName} = req.body;
        const {authorID} = req.params;
        const find = await authorModel.findByIdAndUpdate(authorID,{userName}, {new:true})

        return res.status(201).json({
            message:" user updated",
            data: find
           }) 

    } catch (error) {
       return res.status(404).json({
        message:" user not updated",
        data: error.message
       }) 
    }
}

export const deleteAuthor = async(req:Request, res:Response)=>{
    try {

       
        const {authorID} = req.params;
        const find = await authorModel.findByIdAndDelete(authorID)

        return res.status(200).json({
            message:" user deleted",
            data: find
           }) 

    } catch (error) {
       return res.status(404).json({
        message:"cant delete author",
        data: error.message
       }) 
    }
}
