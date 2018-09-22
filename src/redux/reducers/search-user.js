import * as constants from "./../constants/search-user";

const initialState = {
  input: "",
  users: [],
  fetching: false
};

export default function(state = initialState, action) {
  const actions = {
    [constants.storeUsers]() {
      return {
        ...state,
        users: action.payload.users
      };
    },
    [constants.changeValue]() {
      return {
        ...state,
        input: action.payload.value
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
