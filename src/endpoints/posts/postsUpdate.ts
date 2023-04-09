import { endpoint } from "../../functions/endpoint";
import { Post } from "../../models/Post";
import { database } from "../../utils/database";

export const postsUpdate = endpoint(async (req, res) => {
  const { postId } = req.params;
  const { ...input } = req.body;

  const post = Post.updateById(database, { postId }, { ...input });

  res.status(200).json(post);
});
