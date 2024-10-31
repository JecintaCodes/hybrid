import express,{Router} from "express"
import { createUser, deleteOneUser, signInUser, updateOneUser, viewAllUser, viewOneUser } from "../controller/authController"
// import multer we use it with our create or signUp
const authRouter = express.Router()

authRouter.route("/read-one").get(viewOneUser)
authRouter.route("/read-all").get(viewAllUser)
authRouter.route("/create").post(createUser)
authRouter.route("/:id/delete").delete(deleteOneUser)
authRouter.route("/:id/update").delete(updateOneUser)
authRouter.route("/sign-in").delete(signInUser)
export default authRouter