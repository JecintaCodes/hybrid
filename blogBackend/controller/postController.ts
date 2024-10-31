// import cloudinery from "cloudinery"
import express, {Request,Response} from "express";
import postModel from "../model/postModel";

 
export const createPost = async(req:Request,res:Response)=>{
    try {
        const {title, contenct, category, image,imageID, description}= req.body;


        const create = await postModel.create({
            title, 
            contenct, category,
             image,
             imageID, 
             description
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