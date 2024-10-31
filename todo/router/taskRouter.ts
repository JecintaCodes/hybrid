import express,{Router}from "express"
import { DeleteOneTask, createTask, getOnetask, getTask, updateOneTask } from "../controller/taskController"


const router = Router()

router.route("/").get(getTask)
router.route("/post").post(createTask)
router.route("/:id").get(getOnetask)
router.route("/update/:/id").patch(updateOneTask)
router.route("/delete/:/id").delete(DeleteOneTask)


export default router