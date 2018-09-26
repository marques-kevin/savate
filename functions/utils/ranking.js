const getStep = step => {
  const steps = [24, 49, 99, 149, 199, 299, 399, 499, 10000];
  const index = steps.findIndex(s => step <= s);
  return matrix[index];
};

const matrix = [
  [6, -5, 6, -5],
  [5.5, -4.5, 7, -6],
  [5, -4, 8, -7],
  [4, -3, 10, -8],
  [3, -2, 13, -10],
  [2, -1, 17, -12.5],
  [1, -0.5, 22, -16],
  [0.5, 0, 28, -20],
  [0, 0, 40, -29]
];

const getPoints = isNormal => steps =>
  isNormal ? getNormal(steps) : getAbnormal(steps);

const getNormal = step => {
  const steps = getStep(step);
  return { win: steps[0], loose: steps[1] };
};

const getAbnormal = step => {
  const steps = getStep(step);
  return { win: steps[2], loose: steps[3] };
};

const calculateRank = (userPoint, challengerPoint, winner) => {
  const step = Math.abs(userPoint - challengerPoint);
  const isNormal =
    winner === "user"
      ? userPoint >= challengerPoint
      : challengerPoint >= userPoint;

  const points = getPoints(isNormal)(step);
  const user = winner === "user" ? points.win : points.loose;
  const challenger = winner === "challenger" ? points.win : points.loose;

  return {
    user: userPoint + user,
    challenger: challenger + challengerPoint
  };
};

module.exports = calculateRank;
