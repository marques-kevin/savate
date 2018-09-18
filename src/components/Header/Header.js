import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import ArrowBack from "@material-ui/icons/ArrowBack";
import Style from "./Header.scss";

export default class Header extends PureComponent {
  render() {
    return (
      <div className={Style.container}>
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
