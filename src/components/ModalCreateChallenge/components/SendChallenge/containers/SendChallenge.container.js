import { connect } from "react-redux";
import * as actions from "./../../../../../redux/actions/create-challenge";

const mapState = ({ createChallenge, auth }) => {
  const {
    challenger,
    rounds,
    userScore,
    challengerScore,
    winner
  } = createChallenge.present;

  return {
    challenger: challenger.username,
    winner: winner === "user" ? auth.user.username : challenger.username,
    rounds,
    results: [userScore, challengerScore]
  };
};

const mapDispatch = dispatch => ({
  onSubmit: () => dispatch(actions.fetchSendChallenge())
});

export default connect(mapState, mapDispatch);
