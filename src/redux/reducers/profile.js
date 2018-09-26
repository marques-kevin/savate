import * as constants from "./../constants/profile";

const initialState = {
  user: {},
  fetching: false
};

export default function(state = initialState, action) {
  const actions = {
    [constants.storeUser]() {
      return {
        ...state,
        user: action.payload.user
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
