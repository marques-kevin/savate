import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import ArrowBack from "@material-ui/icons/ArrowBack";
import Style from "./Header.scss";
import classNames from "classnames";

export default class Header extends PureComponent {
  render() {
    return (
      <div className={classNames(Style.container, {
        [Style.noBoxShadow]: !!this.props.noBoxShadow
      })}>
        {this.props.back && (
          <div className={Style.back}>
            <ArrowBack />
          </div>
        )}

        <div className={Style.title}>{this.props.title}</div>
      </div>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string
};
