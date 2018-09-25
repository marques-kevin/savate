import * as constants from "./../constants/stats";

const initialState = {
  user: null,
  fetching: false,
  challenges: [],
  totalChallenge: 0,
  totalChallengeWin: 0,
  totalChallengeLoose: 0,
  totalRounds: 0,
  totalRoundsWin: 0,
  totalRoundLoose: 0
};

export default function(state = initialState, action) {
  const actions = {
    [constants.storeStats]() {
      return {
        ...state,
        ...action.payload.stats
      };
    },
    [constants.fetching]() {
      return {
        ...state,
        fetching: true
      };
    },

    [constants.fetchEnd]() {
      return {
        ...state,
        fetching: false
      };
    },

    default() {
      return state;
    }
  };

  return (actions[action.type] || actions.default)();
}
