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
        onClickUser={id => this.props.onClickUser(id)}
        challenger={challenger}
      />
    ));
  }
}

Live.defaultProps = {
  challenges: [],
  onMount: () => console.warn("default: Live.onMount"),
  onClickUser: () => console.warn("default: Live.onClickUser"),
  onClickChallenge: () => console.warn("default: Live.onClickChallenge")
};

export default Connect(Live);
export const Component = Live;
