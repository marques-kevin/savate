import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Container, Switcher, Value, Indicator } from "./Switch.style";

export default class Switch extends PureComponent {
  state = { current: 0 };

  onSwitch(current) {
    if (this.state.current === current) return false;
    this.props.onSwitch(current);
    this.setState({ current });
  }

  isCurrent(current) {
    return this.state.current === current;
  }

  render() {
    return (
      <Container>
        <Switcher>
          <Value onClick={() => this.onSwitch(0)} current={this.isCurrent(0)}>
            En cours
          </Value>
          <Value onClick={() => this.onSwitch(1)} current={this.isCurrent(1)}>
            Historique
          </Value>
          <Indicator left={this.state.current === 0} />
        </Switcher>
      </Container>
    );
  }
}

Switch.propTypes = {
  tabs: PropTypes.array,
  onSwitch: PropTypes.func
};

Switch.defaultProps = {
  onSwitch: () => false
};
