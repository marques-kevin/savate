import * as types from "../constants/notification";
import * as Models from "./../../utils/models";

export const storeChallenges = challenges => ({
  type: types.storeChallenges,
  payload: { challenges }
});

export const fetching = () => ({
  type: types.fetching
});

export const fetchEnd = () => ({
  type: types.fetchEnd
});

export const fetchGetChallenges = () => (dispatcher, getState) => {
  dispatcher(fetching());

  const { auth } = getState();

  return Models.getChallengesNotifications(auth.user.id).then(challenges => {
    dispatcher(fetchEnd());
    dispatcher(storeChallenges(challenges));
  });
};
