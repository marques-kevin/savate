import * as constants from "./../constants/listener";

const initialState = {
  subscribe: []
};

export default function(state = initialState, action) {
  const actions = {
    [constants.subscribe]() {
      return {
        ...state,
        subscribe: action.payload.subscribe
      };
    },

    [constants.unsubscribe]() {
      const find = state.subscribe.find(f => f === action.payload.unsubscribe);
      if (find) find();

      return {
        ...state,
        subscribe: state.subscribe.filter(f => f !== action.payload.unsubscribe)
      };
    },

    [constants.unsubscribeAll]() {
      state.subscribe.forEach(f => f());

      return {
        ...state,
        subscribe: []
      };
    },

    default() {
      return state;
    }
  };

  return (actions[action.type] || actions.default)();
}
