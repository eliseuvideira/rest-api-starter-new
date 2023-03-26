import { endpoint } from "../../functions/endpoint";
import { User } from "../../models/User";
import { database } from "../../utils/database";

export const usersCreate = endpoint(async (req, res) => {
  const { ...input } = req.body;

  const user = User.create(database, { ...input });

  res.status(201).json(user);
});
