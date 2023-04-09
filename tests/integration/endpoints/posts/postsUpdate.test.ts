import "../../fixture";

import { chance } from "../../../utils/chance";
import { request } from "../../request";

describe("PATCH /posts/:id", () => {
  it("should update a post", async () => {
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

    const fields = {
      title: chance.custom.post.title(),
      content: chance.custom.post.content(),
    };

    const response = await request()
      .patch(`/posts/${post.postId}`)
      .send({
        ...fields,
      });

    expect(response.status).toBe(200);
    expect(response.body).toStrictEqual({
      ...post,
      ...fields,
    });
  });
});
