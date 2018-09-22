import * as constants from "./../constants/create-challenge";

const initialState = {
  past: [],
  present: {
    view: "search",
    challenger: false,
    rounds: false,
    results: [],
    userScore: 0,
    challengerScore: 0
  },
  isOpen: false
};

export default function(state = initialState, action) {
  const actions = {
    [constants.undo]() {
      return {
        ...state,
        past: state.past.slice(0, state.past.length - 1),
        present: state.past[state.past.length - 1]
      };
    },

    [constants.storeChallenger]() {
      return {
        ...state,
        past: [state.present],
        present: {
          ...state.present,
          view: "rounds",
          challenger: action.payload.challenger
        }
      };
    },

    [constants.storeRounds]() {
      return {
        ...state,
        past: [...state.past, state.present],
        present: {
          ...state.present,
          view: "results",
          rounds: action.payload.rounds
        }
      };
    },

    [constants.storeResults]() {
      const isFinish =
        action.payload.user === state.present.rounds ||
        action.payload.challenger === state.present.rounds;

      return {
        ...state,
        past: [...state.past, state.present],
        present: {
          ...state.present,
          view: isFinish ? "submit" : state.present.view,
          rounds: [...action.payload.rounds, action.payload]
        }
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
