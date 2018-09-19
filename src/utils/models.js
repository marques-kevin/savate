import { Firebase } from "./firebase";

export const authenticate = (email, password) => {
  return Firebase.auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => {
      console.log(user);
      return user;
    });
};

