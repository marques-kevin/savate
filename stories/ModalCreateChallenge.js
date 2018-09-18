import React from "react";
import ModalCreateChallenge from "./../src/components/ModalCreateChallenge/ModalCreateChallenge";
import SearchUser from "./../src/components/ModalCreateChallenge/components/SearchUser/SearchUser";
import SelectRounds from "./../src/components/ModalCreateChallenge/components/SelectRounds/SelectRounds";
import RoundWinners from "./../src/components/ModalCreateChallenge/components/RoundWinners/RoundWinners";

export default (storiesOf, addons) => {
  storiesOf("ModalCreateChallenge", module)
    .add("La page SelectRounds", () => <SelectRounds />)
    .add("La page SearchUser", () => <SearchUser />)
    .add("La page RoundWinners", () => <RoundWinners />);
};
