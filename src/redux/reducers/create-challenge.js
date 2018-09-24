import * as constants from "./../constants/create-challenge";

const initialState = {
  past: [],
  present: {
    view: "search",
    challenger: false,
    user: false,
    rounds: 5,
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
      const userScore =
        action.payload.result === "user"
          ? state.present.userScore + 1
          : state.present.userScore;

      const challengerScore =
        action.payload.result === "challenger"
          ? state.present.challengerScore + 1
          : state.present.challengerScore;

      const round = {
        user: userScore,
        challenger: challengerScore
      };

      const isFinish =
        round.user === state.present.rounds ||
        round.challenger === state.present.rounds;

      return {
        ...state,
        past: [...state.past, state.present],
        present: {
          ...state.present,
          view: isFinish ? "submit" : state.present.view,
          userScore,
          challengerScore,
          winner: isFinish
            ? round.user > round.challenger
              ? state.present.user
              : state.present.challenger
            : false,
          results: [...state.present.results, round]
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
