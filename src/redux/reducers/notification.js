import * as constants from "./../constants/notification";

const initialState = {
  news: [],
  friends: [],
  challenges: [],
  dontRead: 0
};

export default function(state = initialState, action) {
  const actions = {
    [constants.storeChallenges]() {
      return {
        ...state,
        challenges: action.payload.challenges
      };
    },

    [constants.removeChallenge]() {
      return {
        ...state,
        challenges: state.challenges.filter(
          ({ id }) => id !== action.payload.id
        )
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
