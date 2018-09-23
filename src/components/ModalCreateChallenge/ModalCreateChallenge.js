import React, { PureComponent } from "react";
import Style from "./ModalCreateChallenge.scss";
import Connect from "./containers/ModalCreateChallenge.container";
import SearchUser from "./components/SearchUser/SearchUser";
import RoundWinners from "./components/RoundWinners/RoundWinners";
import SelectRounds from "./components/SelectRounds/SelectRounds";
import Footer from "./components/Footer/Footer";

class ModalCreateChallenge extends PureComponent {
  render() {
    return this.props.isOpen ? (
      <div className={Style.container}>
        {this.props.view === "search" && (
          <SearchUser onSelect={this.props.onSelectChallenger} />
        )}
        {this.props.view === "rounds" && (
          <SelectRounds onSubmit={this.props.onSelectRounds} />
        )}
        {this.props.view === "results" && <RoundWinners />}
        <Footer
          onPrev={this.props.view === "search" ? false : this.props.onPrev}
        />
      </div>
    ) : null;
  }
}

ModalCreateChallenge.propTypes = {};
ModalCreateChallenge.defaultProps = {
  onSelectChallenger: () =>
    console.warn("default: ModalCreateChallenge.onSelectChallenger"),
  onPrev: () => console.warn("default: ModalCreateChallenge.onPrev"),
  onSelectRounds: () =>
    console.warn("default: ModalCreateChallenge.onSelectRounds")
};

export default Connect(ModalCreateChallenge);
export const Component = ModalCreateChallenge;
