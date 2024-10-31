import mongoose from "mongoose";

export interface iTask{
   
    task?: string
    priority?: string
    isComplete?: string
}

interface iTaskData extends iTask, mongoose.Document {}

const taskModel = new mongoose.Schema(
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

export default mongoose.model<iTaskData>("task",taskModel)