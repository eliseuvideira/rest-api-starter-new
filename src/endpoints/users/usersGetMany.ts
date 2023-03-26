import { endpoint } from "../../functions/endpoint";
import { User } from "../../models/User";
import { database } from "../../utils/database";

export const usersGetMany = endpoint(async (req, res) => {
  const users = User.find(database, {});

  res.status(200).json(users);
});
