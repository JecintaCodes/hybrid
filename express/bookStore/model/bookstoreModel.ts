import mongoose from "mongoose";
import  { bookstoreSchema } from "../utils/interface";


interface iBooks extends bookstoreSchema, mongoose.Document{}
const bookSchema = new mongoose.Schema<bookstoreSchema>({
    title:{
        type: String,
        unique: true,
    },
    description:{
        type: String,
    },
    view:{
        type: [],
    },    
        author:{
            type:String,
        },    
        coverImage:{
            type: String,
        },   
        category:{
            type: String,
        },   
}, {timestamps:true}
);

const BookStoreModel = mongoose.model<iBooks>("BookStores",bookSchema)

export default BookStoreModel