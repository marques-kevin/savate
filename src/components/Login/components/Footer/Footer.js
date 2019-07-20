import React, { PureComponent } from "react";
import Style from "./Footer.scss";

export default class Footer extends PureComponent {
  render() {
    return (
      <div className={Style.container}>
        <div className={Style.button} onClick={this.props.onCancel}>
          Retour
        </div>
      </div>
    );
  }
}

Footer.propTypes = {};
