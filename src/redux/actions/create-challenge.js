import * as types from "../constants/create-challenge";
// import * as Models from "./../../utils/models";

export const undo = () => ({
  type: types.undo
});

export const storeChallenger = challenger => ({
  type: types.storeChallenger,
  payload: { challenger }
});

export const storeRounds = rounds => ({
  type: types.storeRounds,
  payload: { rounds }
});

export const storeResults = result => ({
  type: types.storeResults,
  payload: { result }
});

export const fetching = () => ({
  type: types.fetching
});

export const fetchEnd = () => ({
  type: types.fetchEnd
});

// export const fetchSearchUser = value => dispatcher => {
//   dispatcher(fetching());
//   dispatcher(changeValue(value));

//   return Models.getUsersByName(value).then(users => {
//     dispatcher(fetchEnd());
//     dispatcher(storeUsers(users));
//   });
// };
