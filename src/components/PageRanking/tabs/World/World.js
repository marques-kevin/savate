import React, { PureComponent } from "react";

class World extends PureComponent {
  componentDidMount() {
    this.props.onMount();
  }

  render() {
    return <div>Hello</div>;
  }
}

World.defaultProps = {
  users: [],
  onMount: () => console.warn("default: World.onMount")
};

export default World;
