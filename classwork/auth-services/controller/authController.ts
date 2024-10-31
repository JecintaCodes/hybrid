import express, {Request, Response} from "express"
import crypto from "crypto"
import {iData, iUser} from "../utils/interfaces"
import Database from "../utils/database"
import router from "../router/authRouter"

// let data: iUser[] = []


// export const Register = (req:Request, res:Response):Response=>{
//     try {
//         const ID:string = crypto.randomUUID();
//         const {name, email, password}=req.body;
//         const newUser = {name, email, password };
//         data.push(newUser);

//       return  res.status(200).json({
//             message: "created successfully",
//             data:newUser,
//         })
//     } catch (error) {
//        return res.status(404).json({
//         message: "Not Found",
//        })
//     }
// }

// export const getUsers = (req:Request, res:Response):Response=>{
//     try {
//       return  res.status(200).json({
//             message: "View users",
//             data,
//         })
//     } catch (error) {
//        return res.status(404).json({
//         message: "Not Found",
//         data: error,
//        })
//     }
// }

// export const singleUsers = (req:Request, res:Response):Response=>{
//     try {
//         const {id}= req.params;
//         // const ID: any = id;
//         // console.log(ID);
//         const singleUser = data.filter((el: iUser)=>{
//             return el.id ===id;
//         })
//       return  res.status(200).json({
//             message: "View users",
//             data: singleUser,
//         })
//     } catch (error) {
//        return res.status(404).json({
//         message: "Not Found",
//         data: error,
//        })
//     }
// }


// export const loginUser = (req:Request, res:Response)=>{
//     try {
//         const { email, password } = req.body;

//        const user = data.filter((el)=>{         
//         if(el.email === email && el.password===password) {
//             return  res.status(200).json({
               
//                 message: "Login users",
//                 data: el
               
//         })
//        })
      
//     } catch (error) {
//        return res.status(404).json({
//         message: "Not Found",
//         data:error,
//        })
//     }
// }

// viewing students
export const viewAuth = (req:Request, res:Response):Response=>{
    try {
       return res.status(200).json({
            message: "list of students",
            database: Database
        })
    } catch (error) {
        return res.status(404).json({
            message: "cant fetch students"
        })
    }
}

// Register student

export const registerAuth = (req: Request, res:Response):Response=>{
    try {
        const {name, email, password, age} = req.body;
        const IDs = crypto.randomUUID()
        const IDS1 = crypto.pseudoRandomBytes(16).toString("hex")

        let newData:iData = {
            id:  "67yy",
            name,
           email ,
           password,
           age
        }
        Database.push(newData)
        return res.status(201).json({
            message:"student added", 
            data:newData
        })
    } catch (error) {
        return res.status(404).json({
            message: "cant register students", error
        })
    }
}

// geting single students
export const getSingleStudent = (req:Request,res:Response):Response=>{
    try {
        const {id} = req.params;
      const student =  Database.filter((el:iData)=>{
            return el.id === id;
        })

        return res.status(200).json({
            message: "single student has been gotten",
            data:student
        })
    } catch (error) {
        return res.status(404).json({
            message: "cant get student", 
            data:error
        })
    }
}

// deleting single student
export const deleteSingleStudent = (req:Request,res:Response):Response=>{
    try {
        const {id} = req.params;
      Database.filter((el:iData)=>{
            return el.id === id;
        })

        return res.status(200).json({
            message: "single student has been gotten",
            data:Database
        })
    } catch (error) {
        return res.status(404).json({
            message: "cant get student", 
            data:error
        })
    }
}

// updating single student
export const updatingSingleStudent = (req:Request,res:Response):Response=>{
    try {
        const {id} = req.params;
        const {name, age , email, password}= req.body
    const mainID = parseInt(id)-1
    Database[mainID].name =name
    Database[mainID].age =age
    Database[mainID].email=email
    Database[mainID].password =password
             

        return res.status(201).json({
            message: "details updated",
            
        })
    } catch (error) {
        return res.status(404).json({
            message: "udated student ", 
            data:error
        })
    }
}

export default router