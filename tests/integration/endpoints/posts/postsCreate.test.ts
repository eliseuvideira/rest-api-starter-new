import "../../fixture";

import { chance } from "../../../utils/chance";
import { request } from "../../request";

describe("POST /posts", () => {
  it("should create a new post", async () => {
    expect.assertions(2);

    const post = {
      postId: chance.uuid(),
      title: chance.custom.post.title(),
      content: chance.custom.post.content(),
    };

    const response = await request()
      .post("/posts")
      .send({
        ...post,
      });

    expect(response.status).toBe(201);
    expect(response.body).toStrictEqual({
      ...post,
    });
  });
});
