import { Database, UserProps } from "../utils/database";

export const User = {
  find: (database: Database, props: Partial<UserProps>) =>
    database.users.filter((user) =>
      (Object.keys(props) as (keyof UserProps)[]).every(
        (key) => user[key] === props[key]
      )
    ),
  findById: (database: Database, id: Pick<UserProps, "userId">) =>
    database.users.find((user) =>
      (Object.keys(id) as (keyof Pick<UserProps, "userId">)[]).every(
        (key) => user[key] === id[key]
      )
    ),
  create: (database: Database, props: UserProps) => {
    database.users.push(props);

    return props;
  },
  updateById: (
    database: Database,
    id: Pick<UserProps, "userId">,
    props: Partial<UserProps>
  ) => {
    const user = User.findById(database, id) || null;

    if (!user) {
      return null;
    }

    const updatedUser = { ...user, ...props };
    const index = database.users.findIndex((user) => user.userId === id.userId);

    database.users[index] = updatedUser;

    return updatedUser;
  },
};
