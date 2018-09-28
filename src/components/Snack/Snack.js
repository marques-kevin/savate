import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Connect from "./containers/Snack.container";

class Snack extends React.PureComponent {
  render() {
    return (
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
        open={this.props.isOpen}
        autoHideDuration={3000}
        ContentProps={{
          "aria-describedby": "message-id"
        }}
        message={<span id="message-id">{this.props.message}</span>}
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={this.props.onClose}
          >
            <CloseIcon />
          </IconButton>
        ]}
      />
    );
  }
}

Snack.propTypes = {};

export default Connect(Snack);
