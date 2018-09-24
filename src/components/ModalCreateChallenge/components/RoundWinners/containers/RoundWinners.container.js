import { connect } from "react-redux";
import * as actions from "./../../../../../redux/actions/create-challenge";

const mapState = state => ({
  user: state.auth.user,
  challenger: state.createChallenge.present.challenger,
  userScore: state.createChallenge.present.userScore,
  challengerScore: state.createChallenge.present.challengerScore,
  roundTotal: state.createChallenge.present.rounds,
  roundLength: state.createChallenge.present.results.length + 1,
  rounds: state.createChallenge.present.results
});

const mapDispatch = dispatch => ({
  onChoice: user => dispatch(actions.storeResults(user))
});

export default connect(mapState, mapDispatch);
