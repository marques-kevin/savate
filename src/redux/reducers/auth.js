import * as constants from "./../constants/auth";

const initialState = {
  user: {},
  isConnected: false,
  fetching: false,
  page: "signin"
};

export default function(state = initialState, action) {
  const actions = {
    [constants.authenticate]() {
      return {
        ...state,
        isConnected: true,
        user: action.payload.user
      };
    },
    [constants.logout]() {
      return { ...initialState };
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
