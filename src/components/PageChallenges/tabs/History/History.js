import React, { PureComponent } from "react";
import ChallengeResultItem from "./../../../ChallengeResultItem/ChallengeResultItem";
import Connect from "./containers/History.container";

class History extends PureComponent {
  componentDidMount() {
    this.props.onMount();
  }

  render() {
    return this.props.challenges.map(({ user, challenger, id }) => (
      <ChallengeResultItem
        key={id}
        user={user}
        onClickResult={() => this.props.onClickChallenge(id)}
        challenger={challenger}
      />
    ));
  }
}

History.defaultProps = {
  challenges: [],
  onMount: () => console.warn("default: History.onMount")
};

export default Connect(History);
export const Component = History;
