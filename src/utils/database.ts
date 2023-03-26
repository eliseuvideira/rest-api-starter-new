export interface PostProps {
  postId: number;
  title: string;
  content: string;
  authorId: number;
}

export interface UserProps {
  userId: number;
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
