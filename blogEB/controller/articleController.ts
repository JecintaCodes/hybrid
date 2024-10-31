import { Request, Response } from "express";
import articleModel from "../model/articleModel";
import iArticleData from "../model/articleModel"


export const createArticle = async(req: Request, res:Response) =>{
        try {
            const {content, description, title, category} = req.body;

            const newArticle = await articleModel.create({
                content,
                 description, 
                 title,
                  category
            });
            return res.status(201).json({
                message:"create article",
                data: newArticle
            })
        } catch (error) {
            return res.status(404).json({
                message:"cant create article",
                data: error
            })
        }
}


export const updateArticle = async(req: Request, res:Response) =>{
    try {
        const {articleID} = req.params;

    const {content,title} = req.body;

        const newArticle = await articleModel.findByIdAndUpdate(
            {articleID},{
            content,
           
             title,
              
        }, {new: true});

        return res.status(201).json({
            message:"updated-article",
            data: articleID
        })

    } catch (error) {
        return res.status(404).json({
            message:"cant create article",
            data: error
        })
    }
}

export const deletedArticle = async(req: Request, res:Response) =>{
    try {
        const {articleID} = req.params;

    const {content,title} = req.body;

        const newArticle = await articleModel.findByIdAndDelete({articleID})
        return res.status(201).json({
            message:"deleted-article",
            data: articleID
        })

    } catch (error) {
        return res.status(404).json({
            message:"cant delete article",
            data: error
        })
    }
}

export const getOneArticle = async(req: Request, res:Response) =>{
    try {
        const {articleID} = req.params;

        const newArticle = await articleModel.findById(articleID)

        return res.status(200).json({
            message:"gotten one article",
            data: newArticle
        })

    } catch (error) {
        return res.status(404).json({
            message:"cant get one article",
            data: error
        })
    }
}

export const getAllArticle = async(req: Request, res:Response) =>{
    try {

        const newArticle = await articleModel.find()

        return res.status(200).json({
            message:"gotten All article",
            data: newArticle
        })

    } catch (error) {
        return res.status(404).json({
            message:"cant get all articles",
            data: error
        })
    }
}