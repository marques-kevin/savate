import * as types from "../constants/listener";
import * as Models from "./../../utils/models";

export const subscribe = subscription => ({
  type: types.subscribe,
  payload: { subscription }
});

export const unsubscribe = ref => ({
  type: types.unsubscribe,
  payload: { ref }
});

export const unsubscribeAll = () => ({
  type: types.unsubscribeAll
});

export const emitChallenge = challenge => ({
  type: types.emitChallenge,
  payload: { challenge }
});

export const subscribeToChallenges = () => (dispatcher, getState) => {
  const { auth } = getState();
  const func = Models.listenForChallenges(auth.user.id, challenge => {
    return dispatcher(emitChallenge(challenge));
  });

  return dispatcher(subscribe(func));
};
