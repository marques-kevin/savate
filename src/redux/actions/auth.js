import * as types from "../constants/auth";
import * as Models from "./../../utils/models";
import * as snack from "./snack";

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

const formatError = code => {
  if (code === "auth/invalid-email")
    return "L'email ne respecte pas le bon format";
  if (code === "auth/user-not-found") return "L'utilisateur n'existe pas";
  if (code === "auth/invalid-password")
    return "Le mot de passe ne respecte pas le bon format";
  if (code === "auth/wrong-password") return "Le mot de passe est invalide";
  return "Une erreur est survenue";
};

const catcher = dispatcher => ({ code }) => {
  dispatcher(fetchEnd());
  dispatcher(snack.open({ message: formatError(code) }));
};

export const fetchAuthenticate = ({ email, password }) => dispatcher => {
  dispatcher(fetching());

  if (!email) return catcher(dispatcher)({ code: "auth/invalid-email" });
  if (!password) return catcher(dispatcher)({ code: "auth/invalid-password" });

  return Models.authenticate(email, password)
    .then(user => {
      dispatcher(fetchEnd());
      dispatcher(authenticate(user));
    })
    .catch(catcher(dispatcher));
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
