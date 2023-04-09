import { endpoint } from "../../functions/endpoint";
import { Post } from "../../models/Post";
import { database } from "../../utils/database";
import { HttpError } from "../../utils/HttpError";

export const postsGetById = endpoint(async (req, res) => {
  const { postId } = req.params;

  const post = Post.findById(database, { postId });

  if (!post) {
    throw new HttpError(404, `Post with postId ${postId} not found`);
  }

  res.status(200).json(post);
});
