import express,{Router} from "express"
import { UpdateUser, deleteUser, findAllUsers, findOneUser, signIn, signUp } from "../controller/authController"

const authRouter = express.Router()


authRouter.route("/get-all").get(findAllUsers)
authRouter.route('/get-one').get(findOneUser)
authRouter.route("/sign-in").post(signIn)
authRouter.route("/sign-up").post(signUp)
authRouter.route("/update").patch(UpdateUser)
authRouter.route("/delete").delete(deleteUser)


export default authRouter