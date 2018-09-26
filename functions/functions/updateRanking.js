const calculateRank = require("./../utils/ranking");

const hasToUpdateRanking = (before, after) => {
  if (
    after.deletedAt ||
    !after.acceptedAt ||
    after.acceptedAt === before.acceptedAt
  )
    return false;
  return true;
};

module.exports = models => change => {
  const after = change.after.data();
  const before = change.before.data();

  if (!hasToUpdateRanking(before, after)) return null;

  const userId = after.user.id;
  const challengerId = after.challenger.id;

  return models
    .getUserAndChallenger(userId, challengerId)
    .then(({ user, challenger }) => {
      const winner = after.user.winner ? "user" : "challenger";
      const calculate = calculateRank(user.ranking, challenger.ranking, winner);
      return models.udpateRanking(userId, challengerId, calculate);
    });
};
