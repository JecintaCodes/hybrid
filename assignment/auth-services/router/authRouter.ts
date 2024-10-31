import express, {Router} from "express"
import { deleteHuman, getSingle, regHumman, updateHumanReg, ViewHuman } from "../controller/authController"


const router:Router = express.Router()

router.route("/").get(ViewHuman)
router.route("/create").post(regHumman)
router.route("/get").get(getSingle)
router.route("/delete").delete(deleteHuman)
router.route("/update").patch(updateHumanReg)

export default router