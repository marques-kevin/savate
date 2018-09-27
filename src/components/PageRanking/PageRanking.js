import React, { PureComponent } from "react";
import Header from "./../Header/Header";
import Switch from "./../Switch/Switch";
import World from "./tabs/World/World";
import Connect from "./containers/PageRanking.container";

class PageRanking extends PureComponent {
  state = {
    tab: 0
  };

  render() {
    return (
      <div>
        <Header title="Classement" noBoxShadow />
        <Switch
          tabs={["Défis", "Tournois"]}
          onSwitch={tab => this.setState({ tab })}
        />
        {this.state.tab === 0 && <World />}
        {this.state.tab === 1 && (
          <div
            style={{ padding: "40px 15px", color: "gray", textAlign: "center" }}
          >
            Cette fonctionnalité arrivera prochainement...
          </div>
        )}
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
