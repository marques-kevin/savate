import React, { PureComponent } from "react";
// import PropTypes from "prop-types";
import classNames from "classnames";
import Style from "./Slider.scss";

export default class Slider extends PureComponent {
  render() {
    return (
      <div className={classNames(Style.container)}>
        <div className={Style.background}>
          <div className={Style.indicator}>Vainqueur</div>
        </div>
      </div>
    );
  }
}

Slider.propTypes = {};

Slider.defaultProps = {};
