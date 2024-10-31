import express, {Router} from "express"
import { getStudent } from "../../todo-services/controller/servicesController"

const router:Router = express.Router()

router.route("/").get(getStudent)

export default router