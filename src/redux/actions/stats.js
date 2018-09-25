import * as types from "../constants/stats";
import * as Models from "./../../utils/models";

export const storeStats = challenge => ({
  type: types.storeStats,
  payload: { challenge }
});

export const fetching = () => ({
  type: types.fetching
});

export const fetchEnd = () => ({
  type: types.fetchEnd
});

export const fetchLiveChallenges = userId => dispatcher => {
  dispatcher(fetching());

  return Models.getStatsFromUser(userId).then(stats => {
    dispatcher(fetchEnd());
    dispatcher(storeStats(stats));
  });
};

export const fetchChallenge = id => dispatcher => {
  dispatcher(fetching());

  return Models.getChallenge(id).then(challenge => {
    dispatcher(fetchEnd());
    dispatcher(storeSelectedChallenge(challenge));
  });
};
