const functions = require("firebase-functions");
const admin = require("firebase-admin");
const udpateRanking = require("./functions/updateRanking");
const createModels = require("./utils/models");

admin.initializeApp();

const Models = createModels(admin.firestore());

exports.udpateRanking = functions.firestore
  .document("challenges/{challengeId}")
  .onUpdate(udpateRanking(Models));
