import calculateRank from "./../ranking";

describe("Utils", () => {
  it("calculateRank normal ", () => {
    const user = 500;
    const challenger = 490;
    const winner = "user";

    const rank = calculateRank(user, challenger, winner);

    expect(rank.user).toEqual(506);
    expect(rank.challenger).toEqual(485);
  });

  it("calculateRank abnormal", () => {
    const user = 500;
    const challenger = 1000;
    const winner = "user";

    const rank = calculateRank(user, challenger, winner);

    expect(rank.user).toEqual(540);
    expect(rank.challenger).toEqual(1000 - 29);
  });
});
