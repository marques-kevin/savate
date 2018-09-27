import * as constants from "./../constants/snack";

const initialState = {
  open: false,
  message: null,
  type: "default"
};

export default function(state = initialState, action) {
  const actions = {
    [constants.open]() {
      return {
        ...state,
        open: true,
        message: action.payload.message
      };
    },

    [constants.close]() {
      return { ...initialState };
    },

    default() {
      return state;
    }
  };

  return (actions[action.type] || actions.default)();
}
