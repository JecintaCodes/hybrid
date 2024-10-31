// import express from "express"
import { iPost } from "../utils/interface"
import mongoose from "mongoose"

interface iPostData extends iPost, mongoose.Document{}

const postModel = new mongoose.Schema({
    image:{
        type: String,
    },
    imageID:{
        type: String,
    },
    content:{
        type: String,
    },
    views:{
        type: Array<String>,
    },
    likes:{
        type: Array<String>,
    },
    category:{
        type: String,
    },
    title:{
        type: String,
    }
},
{timestamps: true},

)
export default mongoose.model<iPostData>("posts", postModel);