const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.udpateRanking = functions.firestore
  .document("challenges/{challengeId}")
  .onUpdate((change, context) => {
    const newValue = change.after.data();
    const previousValue = change.before.data();

    if (
      !newValue.deletedAt &&
      newValue.acceptedAt &&
      newValue.acceptedAt !== previousValue.acceptedAt
    ) {
      console.log(change);
      return "if";
    }
    console.log("else");
    return "else";
  });
