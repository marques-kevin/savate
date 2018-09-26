import updateRanking from "./../updateRanking";
import createModels from "./../../utils/models";
import sinon from "sinon";
import { expect } from "chai";

import challenge from "./__data__/challenge";

const acceptedAt = {
  seconds: 1537912115,
  nanoseconds: 283000000
};

const resolverGet = data => Promise.resolve({ data: () => data });

describe("updateRanking", () => {
  let stub = null,
    engine = null;

  beforeEach(() => {
    engine = createModels();
    stub = sinon.stub(engine, "getUserDoc");
  });

  afterEach(() => {
    stub.restore();
  });

  it("Should not update the ranking", () => {
    const engine = createModels();

    const before = { data: () => ({ ...challenge }) };
    const after = { data: () => ({ ...challenge }) };

    const ranks = updateRanking(engine)({ before, after });

    expect(ranks).to.eq(null);
  });

  it("Should update the ranking", () => {
    const update = ({ ranking }) => Promise.resolve({ ranking });

    stub.withArgs(challenge.challenger.id).returns({
      get: () => resolverGet(challenge.challenger),
      update
    });

    stub.withArgs(challenge.user.id).returns({
      get: () => resolverGet(challenge.user),
      update
    });

    const before = { data: () => ({ ...challenge }) };
    const after = { data: () => ({ ...challenge, acceptedAt }) };

    const ranks = updateRanking(engine)({ before, after });

    return ranks.then(r => {
      expect(r.length).to.eq(2);
      expect(r[0].ranking).to.eq(499.5);
      expect(r[1].ranking).to.eq(801);
    });
  });
});
