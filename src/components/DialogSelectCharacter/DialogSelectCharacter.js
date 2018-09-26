import React, { PureComponent } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import { mapAll } from "./../../utils/characters";

export default class DialogSelectCharacter extends PureComponent {
  handleListItemClick = name => {
    this.props.onSelect(name);
  };

  render() {
    return (
      <Dialog
        open={this.props.open}
        onClose={this.props.onClose}
        aria-labelledby={this.props.label}
        fullScreen
        style={{ width: "100%", margin: "auto", maxWidth: "500px" }}
      >
        <DialogTitle id={this.props.label}>{this.props.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{this.props.text}</DialogContentText>
          <List>
            {mapAll.map(({ name, url }) => (
              <ListItem
                button
                key={name}
                onClick={() => this.handleListItemClick(name)}
              >
                <ListItemAvatar>
                  <Avatar alt={name} src={url} />
                </ListItemAvatar>
                <ListItemText
                  primary={name}
                  style={{ textTransform: "capitalize" }}
                />
              </ListItem>
            ))}
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.onClose}>Annuler</Button>
        </DialogActions>
      </Dialog>
    );
  }
}

DialogSelectCharacter.propTypes = {};
DialogSelectCharacter.defaultProps = { style: {} };
