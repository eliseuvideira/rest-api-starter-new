import { endpoint } from "../../functions/endpoint";
import { Post } from "../../models/Post";
import { database } from "../../utils/database";

export const postsCreate = endpoint(async (req, res) => {
  const { ...input } = req.body;

  const post = Post.create(database, { ...input });

  res.status(201).json(post);
});
