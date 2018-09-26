import * as types from "../constants/challenge";
import * as Models from "./../../utils/models";

export const storeSelectedChallenge = challenge => ({
  type: types.storeSelectedChallenge,
  payload: { challenge }
});

export const storeLiveChallenges = challenges => ({
  type: types.storeLiveChallenges,
  payload: { challenges }
});

export const storeHistoryChallenges = challenges => ({
  type: types.storeHistoryChallenges,
  payload: { challenges }
});

export const openCreateChallenge = () => ({
  type: types.openCreateChallenge
});

export const closeCreateChallenge = () => ({
  type: types.closeCreateChallenge
});

export const fetching = () => ({
  type: types.fetching
});

export const fetchEnd = () => ({
  type: types.fetchEnd
});

export const fetchLiveChallenges = () => dispatcher => {
  dispatcher(fetching());

  return Models.getChallenges().then(challenges => {
    dispatcher(fetchEnd());
    dispatcher(storeLiveChallenges(challenges));
  });
};

export const fetchHistoryChallenge = () => dispatcher => {
  dispatcher(fetching());

  return Models.getHistoryChallenges().then(challenges => {
    dispatcher(fetchEnd());
    dispatcher(storeHistoryChallenges(challenges));
  });
};

export const fetchChallenge = id => dispatcher => {
  dispatcher(fetching());

  return Models.getChallenge(id).then(challenge => {
    dispatcher(fetchEnd());
    dispatcher(storeSelectedChallenge(challenge));
  });
};
