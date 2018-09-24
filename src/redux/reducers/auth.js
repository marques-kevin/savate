import * as constants from "./../constants/auth";

const initialState = {
  user: {},
  isConnected: false,
  fetching: false,
  page: "signin",
  isOpen: false
};

export default function(state = initialState, action) {
  const actions = {
    [constants.open]() {
      return {
        ...state,
        isOpen: true
      };
    },
    [constants.close]() {
      return {
        ...state,
        isOpen: false
      };
    },
    [constants.authenticate]() {
      return {
        ...state,
        isConnected: true,
        user: action.payload.user,
        isOpen: false
      };
    },
    [constants.changePage]() {
      return {
        ...state,
        page: action.payload.page
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
