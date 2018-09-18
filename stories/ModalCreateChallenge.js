import React from "react";
import ModalCreateChallenge from "./../src/components/ModalCreateChallenge/ModalCreateChallenge";
import SearchUser from "./../src/components/ModalCreateChallenge/components/SearchUser/SearchUser";
import Body from "./components/Body";

export default (storiesOf, addons) => {
  storiesOf("ModalCreateChallenge", module).add(
    "La page SearchUser",
    () => <SearchUser />
  );
};
