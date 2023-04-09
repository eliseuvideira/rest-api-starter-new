import "../../fixture";

import { chance } from "../../../utils/chance";
import { request } from "../../request";

describe("POST /users", () => {
  it("should create a new user", async () => {
    expect.assertions(2);

    const user = {
      userId: chance.uuid(),
      name: chance.custom.user.name(),
      email: chance.custom.user.email(),
    };

    const response = await request()
      .post("/users")
      .send({
        ...user,
      });

    expect(response.status).toBe(201);
    expect(response.body).toStrictEqual({
      ...user,
    });
  });
});
