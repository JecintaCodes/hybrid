import mongoose from "mongoose";
import { iTask } from "../utils/Interface";

interface iTasks extends iTask, mongoose.Document{}

const authModel = new mongoose.Schema({
    task:{
        type:String
    },
    avatar:{
        type:String
    },
    name:{
        type:String
    },
    staepToggle:{
        type:String
    },
    prority:{
        type:String
    },
    stateData:{
        type:String
    },
    step:{
        type:{}[]
    },
})
