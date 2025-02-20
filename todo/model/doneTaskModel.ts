import mongoose from "mongoose";

interface iTask{
   
    task?: string
    priority?: string
    isComplete?: string
}

interface iTaskData extends iTask, mongoose.Document {}

const doneTaskModel = new mongoose.Schema(
    {
        task:{
            type: String,
            trim: true,
        },

        priority:{
            type: String
        },
        isComplete:{
            type: Boolean,
            default:false,
        }
    },
    { timestamps: true},
)

export default mongoose.model<iTaskData>("donetask",doneTaskModel)