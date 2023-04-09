import "../../fixture";

import { chance } from "../../../utils/chance";
import { request } from "../../request";

describe("GET /posts", () => {
  it("should return a list of posts", async () => {
    expect.assertions(2);

    const post = {
      id: 1,
      title: chance.custom.post.title(),
      content: chance.custom.post.content(),
    };

    await request()
      .post("/posts")
      .send({
        ...post,
      });

    const response = await request().get("/posts");

    expect(response.status).toBe(200);
    expect(response.body).toStrictEqual([
      {
        ...post,
      },
    ]);
  });
});
