import * as types from "../constants/profile";
import * as Models from "./../../utils/models";

export const storeUser = user => ({
  type: types.storeUser,
  payload: { user }
});

export const fetching = () => ({
  type: types.fetching
});

export const fetchEnd = () => ({
  type: types.fetchEnd
});

export const fetchUser = userId => dispatcher => {
  dispatcher(fetching());

  return Models.getUserInfo(userId).then(user => {
    dispatcher(fetchEnd());
    dispatcher(storeUser(user));
  });
};
