import React, { PureComponent } from "react";
// import PropTypes from "prop-types";
import Style from "./Thumb.scss";
import Characters from "./../../utils/characters";

export default class Thumb extends PureComponent {
  render() {
    return (
      <div
        className={Style.container}
        style={{
          backgroundImage: `url(${Characters(this.props.character)})`,
          height: null,
          width: null
        }}
      />
    );
  }
}

Thumb.propTypes = {};

Thumb.defaultProps = {};
