import model from "../model/bookstoreModel";
import express,{Request,Response} from "express"


export const createBooks = async (req:Request, res:Response) =>{
    try {
        const {title, description, view, author, coverImage, category} = req.body
        const newBooks = await model.create({
            title,
            description: title.charAt(0).toUpperCase(),
            view,
            author,
            coverImage,
            category,

        })
        return res.status(201).json({
            message:"Books created",
            data:newBooks
        })
    } catch (error) {
        return res.status(400).json({
            message:"Books Not Created",
            data: error
        })
    }
};

export const removeBook = async(req:Request,res:Response)=>{
    try {
        const remove = await model.findByIdAndRemove(req.params.ID);
        // const remove1 = await model.findByIdAndDelete(ID)
        return res.status(200).json({
            message: "book removed",
            data: remove
        })
    } catch (error) {
        return res.status(404).json({
            message:"book not removed",
            data: error
        })
    }
};

export const getallBooks = async(req:Request, res:Response)=>{
    try {
        const getbooks = await model.find()
        // const getbook = await model.find().sort({createdAt: -1})
        return res.status(200).json({
            // message: "successfully gotten all books",
             message:`we have ${getbooks.length} books`,
            data:getbooks
        })
    } catch (error) {
        return res.status(404).json({
            message: "books not gotten",
            data: error
        })
    }
}

export const viewSingleBook = async(req:Request,res:Response)=>{
    try {
        const {ID} = req.params;
        const GetOneBook = await model.findById(ID);
        // const singleBook = await model.findById(req.params.ID)
        return res.status(200).json({
            message:"single Book Gotten",
            data:GetOneBook
        })
    } catch (error) {
        return res.status(404).json({
            message: "one book error",
            data: error
        })
    }
}

export const UpdateBook = async(req:Request, res:Response)=>{
    try {
      const {title, category, author,coverImage}= req.body;
      const update = await model.findByIdAndUpdate(
        req.params.ID,
        {title, category, author, coverImage,}, {new: true}
      )
      return res.status(201).json({
        message:"Book Updated",
        data: update
      })
    } catch (error) {
     return res.status(404).json({
        message: "Books not Updated",
        data: error
     })   
    }
}