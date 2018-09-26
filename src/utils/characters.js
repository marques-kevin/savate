import { forEachObjIndexed } from "ramda";

import kilik from "./../assets/characters/thumb/kilik.png";
import azwel from "./../assets/characters/thumb/azwel.png";
import astaroth from "./../assets/characters/thumb/astaroth.png";
import cervantes from "./../assets/characters/thumb/cervantes.png";
import geralt from "./../assets/characters/thumb/geralt.png";
import groh from "./../assets/characters/thumb/groh.png";
import ivy from "./../assets/characters/thumb/ivy.png";
import maxi from "./../assets/characters/thumb/maxi.png";
import mitsurugi from "./../assets/characters/thumb/mitsurugi.png";
import nightmare from "./../assets/characters/thumb/nightmare.png";
import siegfried from "./../assets/characters/thumb/siegfried.png";
import sophitia from "./../assets/characters/thumb/sophitia.png";
import taki from "./../assets/characters/thumb/taki.png";
import talim from "./../assets/characters/thumb/talim.png";
import tira from "./../assets/characters/thumb/tira.png";
import voldo from "./../assets/characters/thumb/voldo.png";
import xianghua from "./../assets/characters/thumb/xianghua.png";
import yoshimitsu from "./../assets/characters/thumb/yoshimitsu.png";
import zasalamel from "./../assets/characters/thumb/zasalamel.png";
import seongMiNa from "./../assets/characters/thumb/seong-mi-na.png";
import unknown from "./../assets/characters/thumb/unknown.png";

const characters = {
  astaroth: astaroth,
  azwel: azwel,
  cervantes: cervantes,
  kilik: kilik,
  geralt: geralt,
  groh: groh,
  ivy: ivy,
  maxi: maxi,
  mitsurugi: mitsurugi,
  nightmare: nightmare,
  "seong-mi-na": seongMiNa,
  siegfried: siegfried,
  sophitia: sophitia,
  taki: taki,
  talim: talim,
  tira: tira,
  voldo: voldo,
  xianghua: xianghua,
  yoshimitsu: yoshimitsu,
  zasalamel: zasalamel,
  unknown
};

export default (n = "") => {
  const name = n.toLowerCase();

  return characters.hasOwnProperty(name)
    ? characters[name]
    : characters.unknown;
};

export const mapAll = (function() {
  const array = [];

  forEachObjIndexed((value, key) => array.push({ name: key, url: value }))(
    characters
  );

  return array;
})();
