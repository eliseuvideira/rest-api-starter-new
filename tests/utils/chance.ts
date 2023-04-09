import { Chance as BaseChance } from "chance";

export class PostChance {
  public title() {
    return chance.sentence({ words: 3 });
  }

  public content() {
    return chance.paragraph({ sentences: 3 });
  }
}

export class UserChance {
  public name() {
    return chance.name();
  }

  public email() {
    return chance.email();
  }
}

export class Chance extends BaseChance {
  public custom: {
    post: PostChance;
    user: UserChance;
  };

  constructor() {
    super();
    this.custom = {
      post: new PostChance(),
      user: new UserChance(),
    };
  }

  public uuid() {
    return super.guid({ version: 4 });
  }
}

export const chance = new Chance();
