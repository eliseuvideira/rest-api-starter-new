export interface PostProps {
  postId: string;
  title: string;
  content: string;
  authorId: number;
}

export interface UserProps {
  userId: string;
  name: string;
}

export interface Database {
  posts: PostProps[];
  users: UserProps[];
}

export const database = {
  posts: [],
  users: [],
};
