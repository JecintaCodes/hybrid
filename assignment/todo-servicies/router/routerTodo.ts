import express, {Router} from "express"


constn router:Router = express.Router()

router.route("/").get(Viewtask)
router.route("/create").post(createTask)
router.route("/get/:id").get(singleTask)
router.route("/update/:id").patch(updateTask)
router.route("/delete/:id").delete(deleteTask)

export default router