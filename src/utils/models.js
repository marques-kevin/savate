import { Firebase } from "./firebase";

export const authenticate = (email, password) => {
  return Firebase.auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => {
      return user;
    });
};

export const register = (email, password) => {
  console.log(email);
  return Firebase.auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => {
      return user;
    });
};
