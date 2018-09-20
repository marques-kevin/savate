import React, { PureComponent } from "react";
import Style from "./ProfileInfo.scss";
import Arrow from "@material-ui/icons/KeyboardArrowRight";

export default class ProfileInfo extends PureComponent {
  render() {
    return (
      <div className={Style.container}>
        <div className={Style.info}>
          <div className={Style.label}>{this.props.label}</div>
          <div className={Style.value}>{this.props.value}</div>
        </div>
        <div className={Style.arrow}>
          <Arrow />
        </div>
      </div>
    );
  }
}

ProfileInfo.propTypes = {};
ProfileInfo.defaultProps = { style: {} };
