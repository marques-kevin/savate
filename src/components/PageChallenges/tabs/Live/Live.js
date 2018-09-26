import React, { PureComponent } from "react";
import ChallengeResultItem from "./../../../ChallengeResultItem/ChallengeResultItem";
import Connect from "./containers/Live.container";

class Live extends PureComponent {
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

Live.defaultProps = {
  challenges: [],
  onMount: () => console.warn("default: Live.onMount")
};

export default Connect(Live);
export const Component = Live;
