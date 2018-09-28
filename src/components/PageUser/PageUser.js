import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Style from "./PageUser.scss";
import Fixed from "./../Fixed/Fixed";
import Padding from "./../Padding/Padding";
import Header from "./../../components/Header/Header";
import SkinUser from "./../../components/SkinUser/SkinUser";
import Stats from "./components/Stats/Stats";
import Connect from "./containers/PageUser.container";

class PageUser extends PureComponent {
  state = {};

  componentDidMount() {
    this.props.onMount();
  }

  render() {
    return (
      <div className={Style.container}>
        <Fixed top>
          <Header title="Profil" noBoxShadow onBack={this.props.onBack} />
          <div className={Style.skin}>
            <SkinUser
              username={this.props.username}
              character={this.props.character}
              ranking={this.props.ranking}
            />
          </div>
        </Fixed>
        <Padding height={240} />
        {/* <div className={Style.buttons}>
          <div className={Style.button}>Défier</div>
          <div className={Style.button}>Demander en amis</div>
        </div> */}
        <div>
          <Stats userId={this.props.userId} />
        </div>
      </div>
    );
  }
}

PageUser.propTypes = {
  tab: PropTypes.string
};

PageUser.defaultProps = {
  onMount: () => console.warn("default: PageUser.onMount")
};

export default Connect(PageUser);
