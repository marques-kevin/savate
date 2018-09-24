import React, { PureComponent } from "react";
import Header from "./../Header/Header";
import Switch from "./../Switch/Switch";
import ChallengeResultItem from "./../ChallengeResultItem/ChallengeResultItem";
import CreateChallengeBtn from "./../CreateChallengeBtn/CreateChallengeBtn";
import ModalCreateChallenge from "./../ModalCreateChallenge/ModalCreateChallenge";
import Connect from "./containers/PageChallenges.container";

class PageChallenges extends PureComponent {
  componentDidMount() {
    this.props.onMount();
  }

  render() {
    return (
      <div>
        <Header title="Défi" />
        <Switch tabs={["En cours", "Historique"]} />
        {this.props.challenges.map(({ user, challenger }, index) => (
          <ChallengeResultItem
            key={index}
            user={user}
            challenger={challenger}
          />
        ))}
        <CreateChallengeBtn
          onClick={() =>
            this.props.onClickCreateChallenge(this.props.isConnected)
          }
        />
        <ModalCreateChallenge />
      </div>
    );
  }
}

PageChallenges.defaultProps = {
  challenges: [],
  onMount: () => console.warn("default: PageChallenges.onMount")
};

export default Connect(PageChallenges);
export const Component = PageChallenges;
