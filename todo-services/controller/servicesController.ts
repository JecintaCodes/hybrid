import express, {Request, Response} from "express"
import axios from "axios"

const url = `http://localhost:2000`
export const getStudent = async (req:Request, res:Response):Promise <Response>=>{
    try {
        const student = await axios.get(`${url}/api/student/`).then((res: any)=>{
            return res.data;
        })

        return res.status(200).json({
            message: "data",
            data:
        })
    } catch (error) {
        return res.status(404).json({
            message:"data error"
        })
    }
}