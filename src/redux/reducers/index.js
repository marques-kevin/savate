import { combineReducers } from "redux";
import auth from "./auth";
import challenge from "./challenge";
import searchUser from "./search-user";
import createChallenge from "./create-challenge";
import notification from "./notification";
import stats from "./stats";
import ranking from "./ranking";
import profile from "./profile";

const reducers = combineReducers({
  auth,
  challenge,
  searchUser,
  createChallenge,
  notification,
  stats,
  profile,
  ranking
});

export default reducers;
