import * as constants from "./../constants/stats";
import { set, lensPath } from "ramda";

const initialState = {
  user: null,
  totalFights: 0,
  totalVictoryFights: 0,
  totalLooseFights: 0,
  totalChallenge: 0,
  totalVictoryChallenge: 0,
  totalLooseChallenge: 0,
  fetching: false
};

export default function(state = initialState, action) {
  const actions = {
    [constants.storeStats]() {
      return {
        ...state
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
