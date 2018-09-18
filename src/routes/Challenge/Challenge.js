import React, { Component } from "react";
import Header from "./../../components/Header/Header";
import Switch from "./../../components/Switch/Switch";
import NavBar from "./../../components/NavBar/NavBar";
import ChallengeResultItem from "./../../components/ChallengeResultItem/ChallengeResultItem";
import CreateChallengeBtn from "./../../components/CreateChallengeBtn/CreateChallengeBtn";
import { Database } from "./../../utils/firebase";

class Challenge extends Component {
  state = { challenges: [] };

  componentDidMount() {
    this.getChallenges();
  }

  getChallenges() {
    Database.collection("challenges")
      .get()
      .then(querySnapshot => {
        const challenges = [];

        querySnapshot.forEach(doc => {
          challenges.push(doc.data());
        });

        this.setState({ challenges });
      });
  }

  render() {
    return (
      <div>
        <Header title="Défi" />
        <Switch tabs={["En cours", "Historique"]} />
        {this.state.challenges.map(({ user, challenger }) => (
          <ChallengeResultItem user={user} challenger={challenger} />
        ))}
        <CreateChallengeBtn />
        <NavBar />
      </div>
    );
  }
}

export default Challenge;
