import React, { PureComponent } from "react";
// import PropTypes from "prop-types";
import Style from "./Thumb.scss";
import Characters from "./../../utils/characters";

export default class Thumb extends PureComponent {
  render() {
    const { size } = this.props;
    return (
      <div
        className={Style.container}
        style={{
          backgroundImage: `url(${Characters(this.props.character)})`,
          ...(size ? { height: size, width: size } : {})
        }}
      />
    );
  }
}

Thumb.propTypes = {};

Thumb.defaultProps = {
  character: ""
};
