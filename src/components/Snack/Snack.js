import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Connect from "./containers/Snack.container";

class Snack extends React.PureComponent {
  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.props.onClose();
  };

  render() {
    return (
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
        open={this.props.isOpen}
        autoHideDuration={3000}
        onClose={this.handleClose}
        ContentProps={{
          "aria-describedby": "message-id"
        }}
        message={<span id="message-id">{this.props.message}</span>}
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={this.handleClose}
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
