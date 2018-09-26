import * as types from "../constants/auth";
import * as Models from "./../../utils/models";

export const open = () => ({
  type: types.open
});

export const close = () => ({
  type: types.close
});

export const authenticate = user => ({
  type: types.authenticate,
  payload: { user }
});

export const changePage = page => ({
  type: types.changePage,
  payload: { page }
});

export const changePageToRegister = () => changePage("register");
export const changePageToSignin = () => changePage("signin");

export const logout = () => ({
  type: types.logout
});

export const fetching = () => ({
  type: types.fetching
});

export const fetchEnd = () => ({
  type: types.fetchEnd
});

export const fetchAuthenticate = ({ email, password }) => dispatcher => {
  dispatcher(fetching());

  return Models.authenticate(email, password).then(user => {
    dispatcher(fetchEnd());
    return dispatcher(authenticate(user));
  });
};

export const fetchUpdateInfo = (label, value) => (dispatcher, getState) => {
  dispatcher(fetching());

  const { auth } = getState();

  return Models.updateUserInfo(auth.user.id, label, value).then(() => {
    dispatcher(fetchEnd());
    return dispatcher(authenticate({ ...auth.user, [label]: value }));
  });
};

export const fetchRegister = info => dispatcher => {
  dispatcher(fetching());

  return Models.register(info).then(user => {
    dispatcher(fetchEnd());
    return dispatcher(authenticate(user));
  });
};

export const fetchIsAuthenticated = () => dispatcher => {
  dispatcher(fetching());

  return Models.isAuthenticated()
    .then(user => {
      dispatcher(fetchEnd());
      return dispatcher(authenticate(user));
    })
    .catch(() => {
      dispatcher(fetchEnd());
    });
};
