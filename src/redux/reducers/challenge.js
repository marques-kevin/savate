import * as constants from "./../constants/challenge";
import { set, lensPath } from "ramda";

const initialState = {
  live: {
    content: []
  },
  history: {
    content: []
  },
  create: {
    isOpen: false,
    build: {}
  },
  selected: {},
  fetching: false
};

export default function(state = initialState, action) {
  const actions = {
    [constants.storeSelectedChallenge]() {
      const lensContent = lensPath(["selected"]);

      return set(lensContent, action.payload.challenge, state);
    },

    [constants.storeLiveChallenges]() {
      const lensContent = lensPath(["live", "content"]);

      return set(lensContent, action.payload.challenges, state);
    },

    [constants.storeHistoryChallenges]() {
      const lensContent = lensPath(["history", "content"]);

      return set(lensContent, action.payload.challenges, state);
    },

    [constants.openCreateChallenge]() {
      const lensContent = lensPath(["create", "isOpen"]);

      return set(lensContent, true, state);
    },

    [constants.closeCreateChallenge]() {
      const lensContent = lensPath(["create", "isOpen"]);

      return set(lensContent, false, state);
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
