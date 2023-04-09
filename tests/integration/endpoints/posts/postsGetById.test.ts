import "../../fixture";

import { chance } from "../../../utils/chance";
import { request } from "../../request";

describe("GET /posts/:id", () => {
  it("should return a post", async () => {
    expect.assertions(2);

    const post = {
      postId: chance.uuid(),
      title: chance.custom.post.title(),
      content: chance.custom.post.content(),
    };

    await request()
      .post("/posts")
      .send({
        ...post,
      });

    const response = await request().get(`/posts/${post.postId}`);

    expect(response.status).toBe(200);
    expect(response.body).toStrictEqual({
      ...post,
    });
  });
});
