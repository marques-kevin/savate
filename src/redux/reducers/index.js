import { combineReducers } from "redux";
import auth from "./auth";
import challenge from "./challenge";
import searchUser from "./search-user";
import createChallenge from "./create-challenge";

const reducers = combineReducers({
  auth,
  challenge,
  searchUser,
  createChallenge
});

export default reducers;
