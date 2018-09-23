import React, { PureComponent } from "react";
// import PropTypes from "prop-types";
import classNames from "classnames";
import Style from "./Slider.scss";

export default class Slider extends PureComponent {
  render() {
    return (
      <div className={classNames(Style.container)}>
        <div
          className={classNames(Style.background, {
            [Style.hasArrow]: !this.props.finished
          })}
        >
          <div
            className={classNames(Style.indicator, {
              [Style.indicatorChallenger]:
                this.props.finished && this.props.winner === "challenger"
            })}
          >
            Vainqueur
          </div>
        </div>
      </div>
    );
  }
}

Slider.propTypes = {};

Slider.defaultProps = {};
