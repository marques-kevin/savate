import React, { PureComponent } from "react";
import { withStyles } from "@material-ui/core/styles";
import Style from "./Tabs.scss";
import MuiTabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

class Tabs extends PureComponent {
  state = { value: 0 };
  render() {
    const { classes } = this.props;

    return (
      <div className={Style.container}>
        <MuiTabs
          fullWidth
          classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
          value={this.state.value}
          onChange={(e, value) => this.setState({ value })}
        >
          <Tab
            label="Informations"
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
          />
          <Tab
            label="Statistiques"
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
          />
          <Tab
            label="Amis"
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
          />
        </MuiTabs>
      </div>
    );
  }
}

Tabs.propTypes = {};

Tabs.defaultProps = {};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  tabsRoot: {
    boxShadow: "0 5px 7px rgba(0,0,0,0.02)"
  },
  tabsIndicator: {
    backgroundColor: "#FFE936",
    height: "3px",
    borderRadius: "3px"
  },
  tabRoot: {
    textTransform: "initial",
    minWidth: 72,
    fontWeight: 600,
    fontSize: "12px",
    color: "#9A9A9A",
    fontFamily: "Open Sans, sans-serif",
    "&$tabSelected": {
      color: "#252530"
    }
  },
  tabSelected: {},
  typography: {
    padding: theme.spacing.unit * 3
  }
});

export default withStyles(styles)(Tabs);
