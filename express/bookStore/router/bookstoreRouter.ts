import express, {Router} from "express";
import { UpdateBook, createBooks, getallBooks, removeBook, viewSingleBook } from "../controller/bookstoreController";

const router:Router = Router()

router.route("/create").post(createBooks)
router.route("/remove").delete(removeBook)
router.route("/get").get(getallBooks)
router.route("/viewsinglebook/:ID").get(viewSingleBook)
router.route("/update").patch(UpdateBook)

export default router