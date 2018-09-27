import React, { PureComponent } from "react";
import Style from "./ProfileInfo.scss";
import classNames from "classnames";
import Arrow from "@material-ui/icons/KeyboardArrowRight";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
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
import { mapAll } from "./../../../../utils/characters";

export default class ProfileInfo extends PureComponent {
  state = {
    open: false,
    value: ""
  };

  handleClickOpen = () => {
    if (this.props.readOnly) return true;
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleListItemClick = name => {
    this.props.onUpdate(name);
    this.handleClose();
  };

  onSubmit = () => {
    this.props.onUpdate(this.state.value);
    this.handleClose();
    this.setState({ value: "" });
  };

  render() {
    return (
      <div>
        <div className={Style.container} onClick={this.handleClickOpen}>
          <div className={Style.info}>
            <div className={Style.label}>{this.props.label}</div>
            <div
              className={classNames(Style.value, {
                [Style.capitalizeValue]: this.props.type === "character"
              })}
            >
              {this.props.value}
            </div>
          </div>
          {!this.props.readOnly && (
            <div className={Style.arrow}>
              <Arrow />
            </div>
          )}
        </div>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby={this.props.label}
          fullScreen
          style={{ width: "100%", margin: "auto", maxWidth: "500px" }}
        >
          <DialogTitle id={this.props.label}>{this.props.title}</DialogTitle>
          <DialogContent>
            <DialogContentText>{this.props.text}</DialogContentText>
            {this.props.type === "character" && (
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
            )}
            {this.props.type !== "character" && (
              <TextField
                autoFocus
                margin="dense"
                onChange={e => this.setState({ value: e.target.value })}
                value={this.state.value}
                id={this.props.label}
                label={this.props.label}
                type={this.props.type}
                fullWidth
              />
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose}>Annuler</Button>
            <Button onClick={this.onSubmit}>Valider</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

ProfileInfo.propTypes = {};
ProfileInfo.defaultProps = { style: {} };
