import * as constants from "./../constants/auth";

const initialState = {
  search: "",
  books: [],
  page: 1,
  fetching: false
};

export default function(state = initialState, action) {
  const actions = {
    [constants.fetching]() {
      return {
        ...state,
        fetching: true
      };
    },

    [constants.fetchEnd]() {
      if (action.search !== state.search) return state;

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
