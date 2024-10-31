import express,{Router}from "express"
import { doneDeleteOneTask, donecreateTask, donegetOnetask, donegetTask, doneupdateOneTask } from "../controller/donetaskController"


const doneRouter = Router()

doneRouter.route("/")
doneRouter.route("/doneget").get(donegetTask)
doneRouter.route("/donepost").post(donecreateTask)
doneRouter.route("/:id").get(donegetOnetask)
doneRouter.route("/doneupdate/:id").patch(doneupdateOneTask)
doneRouter.route("/donedelete/:id").delete(doneDeleteOneTask)


export default doneRouter