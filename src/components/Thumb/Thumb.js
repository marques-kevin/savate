import React, { PureComponent } from "react";
// import PropTypes from "prop-types";
import Style from "./Thumb.scss";

export default class Thumb extends PureComponent {
  render() {
    return (
      <div
        className={Style.container}
        style={{
          backgroundImage: `url(https://picsum.photos/200/300/?gravity=east)`,
          height: null,
          width: null
        }}
      />
    );
  }
}

Thumb.propTypes = {};

Thumb.defaultProps = {};
