import React, { PureComponent } from "react";
import Header from "./../Header/Header";
import Switch from "./../Switch/Switch";
import Fixed from "./../Fixed/Fixed";
import Padding from "./../Padding/Padding";
import World from "./tabs/World/World";
import Connect from "./containers/PageRanking.container";

class PageRanking extends PureComponent {
  state = {
    tab: 0
  };

  render() {
    return (
      <div>
        <Fixed top onHeight={height => this.setState({ height })}>
          <Header title="Classement" noBoxShadow />
          <Switch
            tabs={["Défis", "Tournois"]}
            onSwitch={tab => this.setState({ tab })}
          />
        </Fixed>
        <Padding height={this.state.height} />
        {this.state.tab === 0 && <World />}
        {this.state.tab === 1 && (
          <div
            style={{ padding: "40px 15px", color: "gray", textAlign: "center" }}
          >
            Cette fonctionnalité arrivera prochainement...
          </div>
        )}
        <Padding height={58} />
      </div>
    );
  }
}

PageRanking.defaultProps = {
  challenges: [],
  onMount: () => console.warn("default: PageRanking.onMount")
};

export default Connect(PageRanking);
export const Component = PageRanking;
