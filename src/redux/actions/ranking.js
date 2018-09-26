import * as types from "../constants/ranking";
import * as Models from "./../../utils/models";

export const storeWorld = users => ({
  type: types.storeWorld,
  payload: { users }
});

export const fetching = () => ({
  type: types.fetching
});

export const fetchEnd = () => ({
  type: types.fetchEnd
});

export const fetchWorld = () => dispatcher => {
  dispatcher(fetching());

  return Models.getAllUsers().then(users => {
    dispatcher(fetchEnd());
    dispatcher(storeWorld(users));
  });
};
