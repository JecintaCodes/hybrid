import express,{Request,Response} from "express"
import model from "./model/bookstoreModel"

export const readBooks = async(req:Request, res:Response)=>{
    try {
        const readbooks = await model.find().sort({createdAt: -1})
        //  const readbooks = await model.find()
    
      return res.status(200).json({
        message:`we have ${readBooks.length} Books`,
        data: readbooks
       })

    } catch (error) {
       return res.status(404).json({
        message: "Books not read",
        data:error
       })
    }
}

export const createBooks = async(req:Request,res:Response)=>{
    try {
        const  {title, name, email} = req.body;
        const create = await model.create({
                title: name.charAt(0).toLowercase(),
                 name, 
                 email,
        })
        return res.status(20).json({
            message:"book removed",
            data: create
           })
    } catch (error) {
        return res.status(404).json({
            message: "Books not created",
            data:error
           })
    }
}
export const updateBooks = async(req:Request,res:Response)=>{
    try {
        const {name, title, email} = req.body;
        const update = await model.findByIdAndUpdate(
            req.params.ID,
            {name, title, email}, {new:true}
        )
        return res.status(201).json({
            message:"book Updated",
            data: update
           })
    } catch (error) {
        return res.status(404).json({
            message: "Books not read",
            data:error
           })
    }
}
export const removeBooks = async(req:Request,res:Response)=>{
    try {
        const remove = await model.findByIdAndDelete(req.params.ID)
        // const removes = await model.findByIdAndRemove(ID)
        return res.status(200).json({
            message:"book removed",
            data: remove
           })
    } catch (error) {
        return res.status(404).json({
            message: "Books not read",
            data:error
           })
    }
}