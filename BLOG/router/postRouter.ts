import express, { Router } from "express";
import {
  UpdateOnePost,
  createPost,
  deleteOnePost,
  likePost,
  readOnePost,
  readOnePostUser,
  readPost,
  readPostCategory,
  readUserPost,
  unLikePost,
  viewPost,
} from "../controller/postController";
import { upload } from "../config/multer";

const router: Router = express.Router();

router.route("/:authID/create").post(upload, createPost);
router.route("/posts").get(readPost);

router.route("/posts").get(readPost);

router.route("/category/posts").get(readPostCategory);

router.route("/:postID/post-detail").get(readOnePost);
router.route("/:authID/read-user-post").get(readUserPost);
router.route("/:postID/update-post").patch(UpdateOnePost);
router.route("/:postID/delete-post").delete(deleteOnePost);
router.route("/:postID/read-post-user").get(readOnePostUser);

router.route("/:authID/:postID/unlike-post").patch(unLikePost);
router.route("/:authID/:postID/like-post").patch(likePost);
router.route("/:authID/:postID/view-post").patch(viewPost);

export default router;
