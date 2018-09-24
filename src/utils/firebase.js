import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDwczicqdGYGGSZqXNM0f4XQE3hIv3ClRw",
  authDomain: "savate-7c94b.firebaseapp.com",
  databaseURL: "https://savate-7c94b.firebaseio.com",
  projectId: "savate-7c94b",
  storageBucket: "savate-7c94b.appspot.com",
  messagingSenderId: "280667090040"
};

firebase.initializeApp(config);

const db = firebase.firestore();

db.settings({
  timestampsInSnapshots: true
});

export const Database = db;
export const Firebase = firebase;
