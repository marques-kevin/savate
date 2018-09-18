import React, { Component } from "react";
import Header from "./../../components/Header/Header";
import Switch from "./../../components/Switch/Switch";
import NavBar from "./../../components/NavBar/NavBar";
import ChallengeResultItem from "./../../components/ChallengeResultItem/ChallengeResultItem";

class Challenge extends Component {
  render() {
    return (
      <div>
        <Header title="Défi" />
        <Switch tabs={["En cours", "Historique"]} />
        <ChallengeResultItem />
        <ChallengeResultItem />
        <ChallengeResultItem />
        <ChallengeResultItem />
        <NavBar />
      </div>
    );
  }
}

export default Challenge;
