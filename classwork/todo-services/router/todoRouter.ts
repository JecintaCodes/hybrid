import express, { Router } from "express"
import { createTask, deleteSingleTask, getSingleTask, updateSingleTask, viewTask } from "../controller/todoController";

const router:Router = express.Router();

router.route("/").get(viewTask)
router.route("/delete").post(deleteSingleTask)
router.route("/create").post(createTask)
router.route("/update").post(updateSingleTask)
router.route("/get").post(getSingleTask)

export default router