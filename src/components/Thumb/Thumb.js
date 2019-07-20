import React, { PureComponent } from "react";
import Style from "./Thumb.scss";

export default class Thumb extends PureComponent {
  render() {
    const { picture, size } = this.props;
    return (
      <div
        className={Style.container}
        style={{
          backgroundImage: `url(${picture})`,
          ...(size ? { height: size, width: size } : {})
        }}
      />
    );
  }
}

Thumb.propTypes = {};

Thumb.defaultProps = {
  picture: ""
};
