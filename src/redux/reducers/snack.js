import * as constants from "./../constants/snack";
import * as listener from "./../constants/listener";

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

    [listener.emitChallenge]() {
      const user = action.payload.challenge.user;
      return {
        ...state,
        open: true,
        message: `${user.username} vous a défier !`
      };
    },

    default() {
      return state;
    }
  };

  return (actions[action.type] || actions.default)();
}
