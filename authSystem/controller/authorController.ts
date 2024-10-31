import express, { Request, Response } from "express"
import authorModel from "../model/authorModel"
import cloudinary from "cloudinary"
import bcrypt from "bcrypt"

export const createAuthor = async (req: any, res: Response) => {
    try {
      const { name, email, password } = req.body;
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(password, salt);
  
      const { secure_url, public_id } = await cloudinary.uploader.upload(
        req.file?.path,
      );
  
      const user = await authorModel.create({
        name,
        email,
        password: hashed,
        avatar: secure_url,
        avatarID: public_id,
      });
  

return res.status(200).json({
    message: "SignIn",
    data: user
})

} catch (error) {
    return res.status(404).json({
        message: "create an account",
        data: error
    })
}
}

export const SignIn = async(req:Request,res:Response):Promise<Response>=>{
    try {
        const {email, password} = req.body;
        const find = await authorModel.findOne(email)

        if(find){
            return res.status(201).json({
                message:`welcome ${find.name}`,
                data:find

            });
        }else{
            return res.status(404).json({
                message:"Incorrect email",    
            });
        }
        
    } catch (error) {
   
        return res.status(404).json({
            message:"Please SignUp",
            data: error

                    })
    
    }
}

export const viewAll = async(req:Request,res:Response)=>{
    try {
     
        const find = await authorModel.find()

        return res.status(200).json({
            message:"view all users",
            data: find   
})
    } catch (error) {
   
        return res.status(404).json({
            message:"all users not viewed",
            data: error   
})
    
    }
}

export const viewOne = async(req:Request,res:Response)=>{
    try {

        const {authorID} = req.params;
        const find = await authorModel.findById(authorID)
        
        return res.status(200).json({
            message:"viewed one user ",
            data: find   
})
    } catch (error) {
   
        return res.status(404).json({
            message:"one user not viewed",
            data: error   
})
    
    }
}

export const Update = async(req:Request,res:Response)=>{
    try {
            const {authorID}= req.params;
        const {name, avatar} = req.body;
        const find = await authorModel.findByIdAndUpdate(authorID,
            {name, avatar},
            {new: true})
        
        return res.status(200).json({
            message:"user updated ",
            data: find   
})
    } catch (error) {
   
        return res.status(404).json({
            message:" user not updated",
            data: error   
})
    
    }
}

export const deleted = async(req:Request,res:Response)=>{
    try {
            const {authorID}= req.params;
        const find = await authorModel.findByIdAndDelete(authorID)
        
        return res.status(200).json({
            message:"user deleted ",
            data: find   
})
    } catch (error) {
   
        return res.status(404).json({
            message:" user not deleted",
            data: error   
})
    
    }
}