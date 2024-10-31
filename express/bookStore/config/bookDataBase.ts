import mongoose from "mongoose"

const BookDataBase = "mongodb://0.0.0.0:27017/BookStoreDataBase"

const BookDatabase = async()=>{
 try {
    const bookDBconnect = await mongoose.connect(BookDataBase)
    console.log(`connected to ${bookDBconnect.connection.host}`)
    console.log("")
 } catch (error) {
    console.log("error message",error)    
 }

}

export default BookDatabase()