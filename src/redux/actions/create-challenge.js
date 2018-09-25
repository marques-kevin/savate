import * as types from "../constants/create-challenge";
import * as Models from "./../../utils/models";

export const open = () => ({
  type: types.open
});

export const close = () => ({
  type: types.close
});

export const undo = () => ({
  type: types.undo
});

export const storeChallenger = challenger => ({
  type: types.storeChallenger,
  payload: { challenger }
});

export const storeRounds = rounds => ({
  type: types.storeRounds,
  payload: { rounds }
});

export const storeResults = result => ({
  type: types.storeResults,
  payload: { result }
});

export const fetching = () => ({
  type: types.fetching
});

export const fetchEnd = () => ({
  type: types.fetchEnd
});

export const fetchSendChallenge = () => (dispatcher, getState) => {
  dispatcher(fetching());

  const { createChallenge: { present: challenge }, auth } = getState();
  const schema = {
    user: {
      ...auth.user,
      winner: challenge.winner === "user",
      score: challenge.userScore
    },
    challenger: {
      ...challenge.challenger,
      winner: challenge.winner === "challenger",
      score: challenge.challengerScore
    },
    createdAt: new Date(),
    firstTo: challenge.rounds,
    rounds: challenge.results
  };

  return Models.submitChallenge(schema).then(() => {
    dispatcher(fetchEnd());
    dispatcher(close());
  });
};
