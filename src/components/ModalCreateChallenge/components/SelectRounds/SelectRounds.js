import React, { PureComponent } from "react";
import Style from "./SelectRounds.scss";
import Header from "./../../../Header/Header";
import Footer from "./../Footer/Footer";
import Input from "./../Input/Input";
import Button from "./../../../MainButton/MainButton";

export default class SearchUser extends PureComponent {
  render() {
    return (
      <div className={Style.container}>
        <Header title="Combien de manches ?" noBoxShadow />
        <Input placeholder="5" style={{ width: "50px" }} type="number" />
        <Button text="Valider" style={{ marginTop: "100px" }} />
        <Footer onPrev />
      </div>
    );
  }
}

SearchUser.propTypes = {};
