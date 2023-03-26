import { endpoint } from "../../functions/endpoint";
import { User } from "../../models/User";
import { database } from "../../utils/database";

export const usersUpdate = endpoint(async (req, res) => {
  const { userId } = req.params;
  const { ...input } = req.body;

  const user = User.updateById(database, { userId: +userId }, { ...input });

  res.status(200).json(user);
});
