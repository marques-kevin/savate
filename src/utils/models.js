import { Firebase, Database } from "./firebase";

export const authenticate = (email, password) => {
  return Firebase.auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => {
      return user;
    });
};

