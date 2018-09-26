import React, { PureComponent } from "react";
import Header from "./../Header/Header";
import World from "./tabs/World/World";
import Connect from "./containers/PageRanking.container";

class PageRanking extends PureComponent {
  render() {
    return (
      <div>
        <Header title="Classement" />
        <World />
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
