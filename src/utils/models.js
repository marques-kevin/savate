import { Firebase, Database } from "./firebase";
import { filter, pipe, toLower, contains, prop, slice } from "ramda";

export const initializeCache = func => {
  const cache = {};
  return func(cache);
};

export const mapQuerySnapshot = querySnapshot => {
  const data = [];

  querySnapshot.forEach(doc => data.push(doc.data()));

  return data;
};

export const getDataFromCache = initializeCache(cache => {
  return collection => {
    if (cache.hasOwnProperty(collection))
      return Promise.resolve(cache[collection]);
    return Database.collection(collection)
      .get()
      .then(doc => {
        cache[collection] = doc;
        return doc;
      });
  };
});

export const authenticate = (email, password) => {
  return Firebase.auth().signInWithEmailAndPassword(email, password);
};

export const isAuthenticated = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = Firebase.auth().currentUser;
      if (user) return resolve(user);
      return reject("The user is not connected");
    }, 1000);
  });
};

export const register = (email, password) => {
  return Firebase.auth().createUserWithEmailAndPassword(email, password);
};

export const getChallenges = () => {
  return Database.collection("challenges")
    .get()
    .then(mapQuerySnapshot);
};

export const getUsersByName = name => {
  return getDataFromCache("users")
    .then(mapQuerySnapshot)
    .then(filter(pipe(prop("username"), toLower, contains(name))))
    .then(slice(0, 10));
};
