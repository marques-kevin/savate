import * as types from "../constants/create-challenge";
import * as Models from "./../../utils/models";

export const open = () => ({
  type: types.open,
  amplitude: {}
});

export const close = () => ({
  type: types.close,
  amplitude: {}
});

export const sendChallenge = () => ({
  type: types.sendChallenge,
  amplitude: {}
});

export const undo = () => ({
  type: types.undo,
  amplitude: {}
});

export const storeChallenger = challenger => ({
  type: types.storeChallenger,
  payload: { challenger },
  amplitude: { challenger }
});

export const storeRounds = rounds => ({
  type: types.storeRounds,
  payload: { rounds },
  amplitude: { rounds }
});

export const storeResults = result => ({
  type: types.storeResults,
  payload: { result },
  amplitude: { result }
});

export const fetching = () => ({
  type: types.fetching
});

export const fetchEnd = () => ({
  type: types.fetchEnd
});

export const fetchSendChallenge = () => (dispatcher, getState) => {
  dispatcher(fetching());
  dispatcher(sendChallenge());

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
