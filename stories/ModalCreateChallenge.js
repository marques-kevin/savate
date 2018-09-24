import React from "react";
import ModalCreateChallenge from "./../src/components/ModalCreateChallenge/ModalCreateChallenge";
import { Component as SearchUser } from "./../src/components/ModalCreateChallenge/components/SearchUser/SearchUser";
import SelectRounds from "./../src/components/ModalCreateChallenge/components/SelectRounds/SelectRounds";
import { Component as RoundWinners } from "./../src/components/ModalCreateChallenge/components/RoundWinners/RoundWinners";
import { Component as SendChallenge } from "./../src/components/ModalCreateChallenge/components/SendChallenge/SendChallenge";
import Body from "./components/Body";

const user = {
  username: "Kayane",
  favoriteCharacter: "Talim",
  ranking: 2104
};

const rounds = [
  { user: 1, challenger: 0 },
  { user: 2, challenger: 0 },
  { user: 2, challenger: 1 }
];

export default (storiesOf, addons) => {
  storiesOf("ModalCreateChallenge", module)
    .add("Le modal en entier", () => (
      <Body>
        <ModalCreateChallenge isOpen={true} />
      </Body>
    ))
    .add("La page SelectRounds", () => <SelectRounds />)
    .add("La page SearchUser", () => <SearchUser />)
    .add("La page RoundWinners", () => (
      <RoundWinners
        roundTotal={10}
        roundLength={15}
        user={user}
        challenger={user}
        rounds={rounds}
      />
    ))
    .add("La page SendChallenge", () => (
      <SendChallenge
        challenger="Keev"
        winner={"Kayane"}
        results={[5, 1]}
        rounds={5}
      />
    ));
};
