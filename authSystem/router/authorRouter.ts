import express,{Router} from "express"
import { SignIn, SignUp, Update, deleted, viewAll, viewOne } from "../controller/authorController"
import upload from "../config/Multer"
const authorRouter = express.Router()


authorRouter.route("/sign-up").post(upload, SignUp)
authorRouter.route("/sign-in").post(SignIn)
authorRouter.route("/view-all").get(viewAll)
authorRouter.route("/view-one/:id").get(viewOne)
authorRouter.route("/update/:id").patch(Update)
authorRouter.route("/deleted/:id").delete(deleted)

export default authorRouter

