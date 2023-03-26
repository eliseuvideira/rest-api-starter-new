import { Database, PostProps } from "../utils/database";

export const Post = {
  find: (database: Database, props: Partial<PostProps>) =>
    database.posts.filter((post) =>
      (Object.keys(props) as (keyof PostProps)[]).every(
        (key) => post[key] === props[key]
      )
    ),
  findById: (database: Database, id: Pick<PostProps, "postId">) =>
    database.posts.find((post) =>
      (Object.keys(id) as (keyof Pick<PostProps, "postId">)[]).every(
        (key) => post[key] === id[key]
      )
    ),
  create: (database: Database, props: PostProps) => {
    database.posts.push(props);

    return props;
  },
  updateById: (
    database: Database,
    id: Pick<PostProps, "postId">,
    props: Partial<PostProps>
  ) => {
    const post = Post.findById(database, id) || null;

    if (!post) {
      return null;
    }

    const updatedPost = { ...post, ...props };
    const index = database.posts.findIndex((post) => post.postId === id.postId);

    database.posts[index] = updatedPost;

    return updatedPost;
  },
};
