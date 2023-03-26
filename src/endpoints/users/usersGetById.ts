import { endpoint } from "../../functions/endpoint";
import { User } from "../../models/User";
import { database } from "../../utils/database";
import { HttpError } from "../../utils/HttpError";

export const usersGetById = endpoint(async (req, res) => {
  const { userId } = req.params;

  const user = User.findById(database, { userId: +userId });

  if (!user) {
    throw new HttpError(404, `User with userId ${userId} not found`);
  }

  res.status(200).json(user);
});
