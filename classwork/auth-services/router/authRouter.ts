import express, { Router } from "express"
import { deleteSingleStudent, getSingleStudent,
    //  getUsers ,
    // loginUser,
    // Register,
    registerAuth,
    // singleUsers,
    updatingSingleStudent,
    viewAuth
} from "../controller/authController";

const router:Router = express.Router();

// router.route("/").get(getUsers)
// router.route("/register").post(Register)
// router.route("/login").post(loginUser)
// router.route("/user/:id").post(singleUsers)




router.route("/").get(viewAuth)
router.route("/get/:id").get(getSingleStudent)
router.route("/delete/:id").delete(deleteSingleStudent)
router.route("/update/:id").patch(updatingSingleStudent)
router.route("/register1").post(registerAuth)

export default router;