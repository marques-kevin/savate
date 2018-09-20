import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Style from "./Pie.scss";

export default class PieComponent extends PureComponent {
  r = 80;
  mid = this.r * Math.PI;
  strokeDasharray = 2 * this.mid;

  state = {
    mode: "fights"
  };

  getOffset() {
    const total = this.getTotal();
    const victories = this.getVictories();
    const percentage = victories / total * 100;
    return this.calculatePercentage(percentage);
  }

  calculatePercentage(percentage) {
    const p = percentage / 100;
    return -(this.mid * 2 - this.mid * 2 * p);
  }

  getModeName() {
    if (this.state.mode === "fights") return "Combats";
    if (this.state.mode === "challenges") return "Défis";
  }

  getVictories() {
    if (this.state.mode === "fights") return this.props.totalVictoryFights;
    if (this.state.mode === "challenges")
      return this.props.totalVictoryChallenge;
  }

  getLooses() {
    if (this.state.mode === "fights") return this.props.totalLooseFights;
    if (this.state.mode === "challenges") return this.props.totalLooseChallenge;
  }

  getTotal() {
    if (this.state.mode === "fights") return this.props.totalFights;
    if (this.state.mode === "challenges") return this.props.totalChallenge;
  }

  changeMode = () => {
    this.setState(({ mode }) => ({
      mode: mode === "fights" ? "challenges" : "fights"
    }));
  };

  render() {
    return (
      <div className={Style.container}>
        <div className={Style.labelLeft}>{this.getVictories()}</div>
        <div className={Style.labelRight}>{this.getLooses()}</div>
        <div className={Style.roundMiddle} onClick={this.changeMode}>
          <div className={Style.infos}>
            <h1>{this.getTotal()}</h1>
            <h2>{this.getModeName()}</h2>
          </div>
        </div>
        <svg className={Style.svg} viewBox="0 0 210 210">
          <circle cx="50%" cy="50%" r={this.r} className={Style.circleBg} />
          <circle
            className={Style.circleProgress}
            cx="50%"
            cy="50%"
            r={this.r}
            strokeWidth={0}
            strokeDasharray={this.strokeDasharray}
            strokeDashoffset={this.getOffset()}
          />
        </svg>
      </div>
    );
  }
}

PieComponent.propTypes = {
  totalFights: PropTypes.number,
  totalVictoryFights: PropTypes.number,
  totalLooseFights: PropTypes.number,
  totalChallenge: PropTypes.number,
  totalVictoryChallenge: PropTypes.number,
  totalLooseChallenge: PropTypes.number
};

PieComponent.defaultProps = {};
