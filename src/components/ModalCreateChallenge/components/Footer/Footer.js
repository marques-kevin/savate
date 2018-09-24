import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Style from "./Footer.scss";

export default class Footer extends PureComponent {
  render() {
    return (
      <div className={Style.container}>
        {this.props.onPrev && (
          <div className={Style.button} onClick={this.props.onPrev}>
            Précédent
          </div>
        )}
        <div className={Style.button} onClick={this.props.onClose}>
          Retour
        </div>
      </div>
    );
  }
}

Footer.propTypes = {
  onPrev: PropTypes.func
};
