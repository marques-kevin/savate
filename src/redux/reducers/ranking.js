import * as constants from "./../constants/ranking";
import { sort } from "ramda";

const initialState = {
  world: [],
  fetching: false
};

export default function(state = initialState, action) {
  const actions = {
    [constants.storeWorld]() {
      return {
        ...state,
        world: sort((a, b) => b.ranking - a.ranking)(action.payload.users)
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
