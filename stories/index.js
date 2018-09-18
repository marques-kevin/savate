import "./../src/styles/global.scss";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Welcome from "./Welcome";
import NavBar from "./NavBar";
import Header from "./Header";
import Switch from "./Switch";
import ModalCreateChallenge from "./ModalCreateChallenge";
import ChallengeResultItem from "./ChallengeResultItem";

Welcome(storiesOf, { linkTo, action });
Header(storiesOf, { linkTo, action });
NavBar(storiesOf, { linkTo, action });
ChallengeResultItem(storiesOf, { linkTo, action });
ModalCreateChallenge(storiesOf, { linkTo, action });
Switch(storiesOf, { linkTo, action });
