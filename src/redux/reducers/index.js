import { combineReducers } from "redux";
import auth from "./auth";
import challenge from "./challenge";

const reducers = combineReducers({
  auth,
  challenge
});

export default reducers;
