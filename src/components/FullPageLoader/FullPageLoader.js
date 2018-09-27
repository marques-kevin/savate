import React, { PureComponent } from "react";
import Style from "./FullPageLoader.scss";
import CircularProgress from "@material-ui/core/CircularProgress";

export default class FullPageLoader extends PureComponent {
  render() {
    return !this.props.loading ? null : (
      <div className={Style.container}>
        <CircularProgress />
      </div>
    );
  }
}

FullPageLoader.propTypes = {};
FullPageLoader.defaultProps = {
  loading: false
};
