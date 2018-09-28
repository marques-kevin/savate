import React, { PureComponent } from "react";
import Header from "./../Header/Header";
import Fixed from "./../Fixed/Fixed";
import Padding from "./../Padding/Padding";
import Switch from "./../Switch/Switch";
import Live from "./tabs/Live/Live";
import History from "./tabs/History/History";
import CreateChallengeBtn from "./../CreateChallengeBtn/CreateChallengeBtn";
import ModalCreateChallenge from "./../ModalCreateChallenge/ModalCreateChallenge";
import Connect from "./containers/PageChallenges.container";

class PageChallenges extends PureComponent {
  state = {
    tab: 0,
    height: 0
  };

  render() {
    return (
      <div>
        <Fixed top onHeight={height => this.setState({ height })}>
          <Header title="Défi" noBoxShadow />
          <Switch
            tabs={["Récent", "Historique"]}
            onSwitch={tab => this.setState({ tab })}
          />
        </Fixed>
        <Padding height={this.state.height} />

        {this.state.tab === 0 && <Live />}
        {this.state.tab === 1 && <History />}

        <Padding height={130} />

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
