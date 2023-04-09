import { chance } from "../../../utils/chance";
import "../../fixture";
import { request } from "../../request";

describe("PATCH /users/:id", () => {
  it("should update a user", async () => {
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

    const fields = {
      name: chance.custom.user.name(),
      email: chance.custom.user.email(),
    };

    const response = await request()
      .patch(`/users/${user.userId}`)
      .send({
        ...fields,
      });

    expect(response.status).toBe(200);
    expect(response.body).toStrictEqual({
      ...user,
      ...fields,
    });
  });
});
