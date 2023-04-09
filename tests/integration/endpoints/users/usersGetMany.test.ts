import "../../fixture";

import { chance } from "../../../utils/chance";
import { request } from "../../request";

describe("GET /users", () => {
  it("should return a list of users", async () => {
    expect.assertions(2);

    const user = {
      userId: chance.uuid(),
      name: chance.custom.user.name(),
      email: chance.custom.user.email(),
    };

    await request()
      .post("/users")
      .send({
        ...user,
      });

    const response = await request().get("/users");

    expect(response.status).toBe(200);
    expect(response.body).toStrictEqual([
      {
        ...user,
      },
    ]);
  });
});
