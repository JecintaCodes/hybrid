import { Router } from "express";
import { createArticle, deletedArticle, getAllArticle, getOneArticle, updateArticle } from "../controller/articleController";


const articleRouter = Router();


articleRouter.route("/create-Article").post(createArticle)
articleRouter.route("/update/articleID").patch(updateArticle)
articleRouter.route("/delete/ArticleID").delete(deletedArticle)
articleRouter.route("/get-all").get(getAllArticle)
articleRouter.route("/get-one/ArticleID").get(getOneArticle)


export default articleRouter