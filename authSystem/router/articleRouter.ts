import { Router } from "express";
import { createArticle, getAllArticles, getFriendArticles, } from "../controller/articleController";

const articleRouter:any = Router();

articleRouter.route("/createarticle/:_authorId").post(createArticle)
articleRouter.route("/likearticle/_authorId/_articleId").get(getAllArticles)
articleRouter.route("/likearticle/_authorId/_articleId").get(getFriendArticles)


export default articleRouter