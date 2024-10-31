import { Router } from "express";
import { SignInAuthUser, signUpAuthUser, deleteUserAccount, readAllUser, readOneUser, updateUserAccount} from "../controller/authController";
import {
    //  createUserAcc
     } from "../controller/authController";

const authRouter = Router();

authRouter.route("/").get(readAllUser)
authRouter.route("/read/:id").get(readOneUser)
// authRouter.route("/create").post(createUserAcc)
authRouter.route("/update/:id").patch(updateUserAccount)
authRouter.route("/deletes/:id").delete(deleteUserAccount)
authRouter.route("/signup").post(signUpAuthUser)
authRouter.route("/signin").post(SignInAuthUser)
// authRouter.route("/get").get()

export default authRouter