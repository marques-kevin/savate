const getData = ref => ref.data();

const Models = engine => ({
  getUserDoc(id) {
    return engine.collection("users").doc(id);
  },
  getUser(id) {
    return this.getUserDoc(id)
      .get()
      .then(getData);
  },
  getUserAndChallenger(userId, challengerId) {
    return Promise.all([this.getUser(userId), this.getUser(challengerId)]).then(
      ([user, challenger]) => ({ user, challenger })
    );
  },
  updateUserRank(id, ranking) {
    return this.getUserDoc(id).update({ ranking });
  },
  udpateRanking(userId, challengerId, ranking) {
    return Promise.all([
      this.updateUserRank(userId, ranking.user),
      this.updateUserRank(challengerId, ranking.challenger)
    ]);
  }
});

module.exports = Models;
