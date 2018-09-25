import { stats } from "./../models";
import { expect } from "chai";
import mockChallenges from "./__data__/challenges.json";

describe("Models tests suite", () => {
  describe("Les tests de la méthode stats", () => {
    it("Doit retourner les stats", () => {
      const id = "K0wuglzqzAdE8MwSe26S5W2sIyE2";
      const parseStats = stats(id)(mockChallenges);

      expect(parseStats.totalChallenge).to.eq(4);
      expect(parseStats.totalChallengeWin).to.eq(2);
      expect(parseStats.totalChallengeLoose).to.eq(2);
      expect(parseStats.totalRounds).to.eq(26);
      expect(parseStats.totalRoundsWin).to.eq(14);
      expect(parseStats.totalRoundLoose).to.eq(12);
    });
  });
});
