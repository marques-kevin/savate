import React, { PureComponent } from "react";
import Style from "./SelectRounds.scss";
import Header from "./../../../Header/Header";
import Input from "./../Input/Input";
import Button from "./../../../MainButton/MainButton";

export default class SearchUser extends PureComponent {
  state = {
    value: 5
  };

  onSubmit() {
    this.props.onSubmit(this.state.value);
  }
  render() {
    return (
      <div className={Style.container}>
        <Header title="Combien de manches ?" noBoxShadow />
        <Input
          placeholder="5"
          style={{ width: "50px" }}
          value={this.state.value}
          onChange={value => this.setState({ value })}
          type="number"
        />
        <Button
          text="Valider"
          style={{ marginTop: "100px" }}
          onClick={() => this.onSubmit()}
        />
      </div>
    );
  }
}

SearchUser.propTypes = {};
