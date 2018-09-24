import { connect } from "react-redux";
import * as actions from "./../../../../../redux/actions/create-challenge";

const mapState = ({ createChallenge }) => {
  const {
    challenger,
    rounds,
    user,
    userScore,
    challengerScore,
    winner
  } = createChallenge.present;

  return {
    user: user.username,
    challenger: challenger.username,
    winner: winner.username,
    rounds,
    results: [userScore, challengerScore]
  };
};

const mapDispatch = dispatch => ({
  onChoice: user => dispatch(actions.storeResults(user))
});

export default connect(mapState, mapDispatch);
