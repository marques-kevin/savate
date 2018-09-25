import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Style from "./Switch.scss";

const Value = ({ children, current, onClick }) => (
  <div className={current ? Style.valueActive : Style.value} onClick={onClick}>
    {children}
  </div>
);

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
    const isCurrent = this.isCurrent(0);
    return (
      <div className={Style.container}>
        <div className={Style.switcher}>
          <Value onClick={() => this.onSwitch(0)} current={isCurrent}>
            {this.props.tabs[0]}
          </Value>
          <Value onClick={() => this.onSwitch(1)} current={!isCurrent}>
            {this.props.tabs[1]}
          </Value>
          <div className={isCurrent ? Style.indicator : Style.indicatorRight} />
        </div>
      </div>
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
