import React, { PureComponent } from "react";
// import PropTypes from "prop-types";
import Style from "./Thumb.scss";

import kilik from "./../../assets/characters/kilik.jpg";
import azwel from "./../../assets/characters/azwel.jpg";
import astaroth from "./../../assets/characters/astaroth.jpg";
import cervantes from "./../../assets/characters/cervantes.jpg";
import geralt from "./../../assets/characters/geralt.jpg";
import groh from "./../../assets/characters/groh.jpg";
import ivy from "./../../assets/characters/ivy.jpg";
import maxi from "./../../assets/characters/maxi.jpg";
import mitsurugi from "./../../assets/characters/mitsurugi.jpg";
import nightmare from "./../../assets/characters/nightmare.jpg";
import siegfried from "./../../assets/characters/siegfried.jpg";
import sophitia from "./../../assets/characters/sophitia.jpg";
import taki from "./../../assets/characters/taki.jpg";
import talim from "./../../assets/characters/talim.jpg";
import tira from "./../../assets/characters/tira.jpg";
import voldo from "./../../assets/characters/voldo.jpg";
import xianghua from "./../../assets/characters/xianghua.jpg";
import yoshimitsu from "./../../assets/characters/yoshimitsu.jpg";
import zasalamel from "./../../assets/characters/zasalamel.jpg";
import seongMiNa from "./../../assets/characters/seong-mi-na.jpg";

const characterResolver = n => {
  const name = n.toLowerCase();

  if (name === "kilik") return kilik;
  if (name === "azwel") return azwel;
  if (name === "astaroth") return astaroth;
  if (name === "cervantes") return cervantes;
  if (name === "geralt") return geralt;
  if (name === "groh") return groh;
  if (name === "ivy") return ivy;
  if (name === "maxi") return maxi;
  if (name === "mitsurugi") return mitsurugi;
  if (name === "nightmare") return nightmare;
  if (name === "siegfried") return siegfried;
  if (name === "sophitia") return sophitia;
  if (name === "taki") return taki;
  if (name === "talim") return talim;
  if (name === "tira") return tira;
  if (name === "voldo") return voldo;
  if (name === "xianghua") return xianghua;
  if (name === "yoshimitsu") return yoshimitsu;
  if (name === "zasalamel") return zasalamel;
  if (name === "seong-mi-na") return seongMiNa;
};

export default class Thumb extends PureComponent {
  render() {
    return (
      <div
        className={Style.container}
        style={{
          backgroundImage: `url(${characterResolver(this.props.character)})`,
          height: null,
          width: null
        }}
      />
    );
  }
}

Thumb.propTypes = {};

Thumb.defaultProps = {};
