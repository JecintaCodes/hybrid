import { Router } from "express";
import { createAuthor, deleteAuthor, findAuthors, findOneAuthors, signInAuthor, updateAuthor } from "../controller/authorController";


const authorRouter = Router()


authorRouter.route("/make").post(createAuthor)
authorRouter.route("/get").get(findAuthors)
authorRouter.route("/get-one/authorID").get(findOneAuthors)
authorRouter.route("/sign").post(signInAuthor)
authorRouter.route("/sign/authorID").patch(updateAuthor)
authorRouter.route("/delete/authorID").delete(deleteAuthor)

export default authorRouter