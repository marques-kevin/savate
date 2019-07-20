import * as types from "../constants/auth";
import * as Models from "./../../utils/models";
import * as snack from "./snack";
import * as Session from "./../../utils/sessionstack";

export const open = () => ({
  type: types.open
});

export const close = () => ({
  type: types.close
});

export const authenticate = user => ({
  type: types.authenticate,
  payload: { user },
  amplitude: { user }
});

export const forgot = email => ({
  type: types.forgot,
  amplitude: { email }
});

export const changePage = page => ({
  type: types.changePage,
  payload: { page },
  amplitude: { page }
});

export const changePageToRegister = () => changePage("register");
export const changePageToSignin = () => changePage("signin");
export const changePageToForgot = () => changePage("forgot");

export const logout = () => ({
  type: types.logout,
  amplitude: {}
});

export const fetching = () => ({
  type: types.fetching
});

export const fetchEnd = () => ({
  type: types.fetchEnd
});

const formatError = code => {
  const messages = {
    "auth/invalid-email": "L'email ne respecte pas le bon format",
    "auth/user-not-found": "L'utilisateur n'existe pas",
    "auth/invalid-password": "Le mot de passe ne respecte pas le bon format",
    "auth/user-exist": "Le nom d'utilisateur existe déjà",
    "auth/wrong-password": "Le mot de passe est invalide",
    "auth/email-already-in-use": "L'email est déjà utilisé",
    default: "Une erreur est survenue"
  };
  return messages[code] || messages.default;
};

const catcher = dispatcher => error => {
  dispatcher(fetchEnd());
  dispatcher(snack.open({ message: formatError(error.code) }));
  return Promise.reject(error);
};

export const fetchAuthenticate = ({ email, password }) => dispatcher => {
  dispatcher(fetching());

  return Models.authenticateWithGoogle()
    .then(user => {
      dispatcher(fetchEnd());
      Session.authenticate(user);
      return dispatcher(authenticate(user));
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

  return Models.register(info)
    .then(user => {
      dispatcher(fetchEnd());
      return dispatcher(authenticate(user));
    })
    .catch(catcher(dispatcher));
};

export const fetchForgot = email => dispatcher => {
  dispatcher(fetching());

  return Models.forgotPassword(email)
    .then(() => {
      return dispatcher(fetchEnd());
    })
    .catch(catcher(dispatcher));
};

export const fetchIsAuthenticated = () => dispatcher => {
  dispatcher(fetching());

  return Models.isAuthenticated()
    .then(user => {
      dispatcher(fetchEnd());
      return dispatcher(authenticate(user));
    })
    .finally(() => {
      dispatcher(fetchEnd());
    });
};

export const fetchLogout = () => dispatcher => {
  dispatcher(fetching());

  return Models.logout().then(() => {
    dispatcher(fetchEnd());
    return dispatcher(logout());
  });
};
