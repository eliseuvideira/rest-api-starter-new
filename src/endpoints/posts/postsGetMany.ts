import { endpoint } from "../../functions/endpoint";
import { Post } from "../../models/Post";
import { database } from "../../utils/database";

export const postsGetMany = endpoint(async (req, res) => {
  const posts = Post.find(database, {});

  res.status(200).json(posts);
});
