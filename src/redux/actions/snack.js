import * as types from "../constants/snack";

export const open = ({ message, type = "default" }) => ({
  type: types.open,
  payload: { message, type }
});

export const close = () => ({
  type: types.close
});
