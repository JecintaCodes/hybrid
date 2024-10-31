import express, { Request, Response } from "express"
import authModel, { iAuth } from "../model/authModel"
import bcrypt from "bcrypt"



export const readAllUser = async (req:Request,res:Response):Promise<Response> => {
    try {
        const user = await authModel.find().sort({
            createdAt: -1
        })

        return res.status(200).json({
            message:"gotten all user",
            data: user,
        })
    } catch (error) {
        return res.status(400).json({
            message:"user not gotten",
            data: error,
        })
    }
};

export const readOneUser = async (req:Request,res:Response):Promise<Response> => {
    try {
        const {id} =req.params;
        const userOne = await authModel.findById(id)

        return res.status(200).json({
            message:"gotten one user",
            data: userOne,
        })
    } catch (error) {
        return res.status(404).json({
            message:"user not gotten",
            data: error,
        })
    }
};
// export const readOne = async(req:Request,res:Response) => {
//     try {

//         const {id} = req.params;
//         const read = await authModel.findById(id);

//     } catch (error) {

//         return res.status(404).json({
//             message:"not read",
//             data: error
//         })
//     }
// }

// securing of password mainly for security npm i bycrypt
// export const createUserAcc = async(req:Request) => {
//     try {
//         const {userName,email,password, confirmPassword, avatar} = req.body;

//         const bycrypt = await bcrypt.genSalt(10);
//         const Harsh = await bcrypt.hash(password,bycrypt);

//         const create = await authModel.create({
//             userName,
//             email,
//             password:Harsh,
//             confirmPassword:password,
//             avatar,

//         });

//         if (password ==== confirmPassword!) {
//             return res.status(201).json({
//                 message:"Sign-IN",
//                 data:create
//             })
//         } else {
//             return res.status(500).json({
//                 message:"In correct Password"
//             })
//         }

//     } catch (error) {
//         return res.status(500).json({
//             message:"In correct Password"
//         })
        
//     }
// }

export const signUpAuthUser = async(req:Request<{},{},iAuth>,res:Response):Promise<Response>=> {
    try {
        const {userName, email,confirmPassword, password, avatar} = req.body; 
 
        const salt = await bcrypt.genSalt(10)
        const Hash =await bcrypt.hash(password , salt)
    
        const signUp = await authModel.create({
        userName,
        email,
        password:Hash,
        confirmPassword:password,
        avatar
        })

       if(password === confirmPassword){
        return res.status(201).json({
            message:"created",
            data: signUp,
    
           })
       }else{
        return res.status(400).json({
            message  :"password not the same"
        })
       }
 
      
     } catch (error:any) {
         return res.status(500).json({
             message:"not created",
             data: error,
             errMsg : error.message
         })
     }
}
export const SignInAuthUser = async(req:Request,res:Response)=> {
  try {
    const {email,password} = req.body;
    const signIn = await authModel.findOne(email)

    if (signIn){
     const passedSignIn = await bcrypt.compare(password, signIn?.password!);

     if(passedSignIn) {
         res.status(201).json({
             message:`welcome${signIn?.userName}`,
             
         })

     }else{
         return res.status(404).json({
             message: "incorrect password"
         })
    
         
     }  }
  } catch (error) {
    return res.status(400).json({
        message: "not found",
        data: error
    })
  }
}    

// export const getAllUsers = async(req:Request,res:Response) =>{
//     try {
//         const getall = await authModel.find().sort({
//             createdAt: -1
//         })
//     } catch (error) {
//         return res.status(400).json({
//             message: "not found",
//             data: error
//         })
//     }
// }
export const updateUserAccount = async (req:Request,res:Response):Promise<Response> => {
    try {
        const {userName, avatar}= req.body;
        const {id} = req.params;
        
       const update = await authModel.findByIdAndUpdate(id,{userName,avatar},{new:true})

        return res.status(201).json({
            message:"account updated",
            data: update,
        })
    } catch (error) {
        return res.status(404).json({
            message:"account not updated",
            data: error,
        })
    }
};

// export const update = async(req:Request,res:Response) => {
//     try {
//         const {avatar, userName}=req.body;
//         const {id} = req.body;
//         const updated = await authModel.findByIdAndUpdate(id)

//         return res.status(201).json({
//             message:"task updated",
//             data:updated
//         })
//     } catch (error) {
//         return res.status(404).json({
//             message:"not uodated",
//             data: error
//         })
//     }
// }
export const deleteUserAccount = async (req:Request,res:Response):Promise<Response> => {
    try {
        
        const {id} = req.params;
       const deleted = await authModel.findByIdAndDelete(id);

        return res.status(200).json({
            message:"account deleted",
            data: deleted
        })
    } catch (error) {
        return res.status(404).json({
            message:"account not deleted",
            data: error,
        })
    }
};


export const signIn = async(req:Request,res:Response)=> {
        try {
            const {email, password} = req.body;

            const sign = await authModel.findOne(email);
            const signs = await bcrypt.compare(password!,sign?.userName!)

            if (sign) {
                if(signs){
                    return res.status(201).json({
                        message:`welcome back ${sign.userName}`,
                        data: signs
                    })

                }else{
                    res.status(404).json({
                        message:"Incorrect Password",
                    }) 
                }

            } else {
                res.status(404).json({
                    message:"user not signed in",
                })  
            }

        } catch (error) {
            res.status(404).json({
                message:"user not signed in",
            })
        }
}