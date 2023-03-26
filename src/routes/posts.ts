import { Router } from "express";
import { postsCreate } from "../endpoints/posts/postsCreate";
import { postsGetById } from "../endpoints/posts/postsGetById";
import { postsGetMany } from "../endpoints/posts/postsGetMany";
import { postsUpdate } from "../endpoints/posts/postsUpdate";

export const router = Router();

router.get("/posts", postsGetMany);

router.get("/posts/:postId", postsGetById);

router.post("/posts", postsCreate);

router.patch("/posts/:postId", postsUpdate);
