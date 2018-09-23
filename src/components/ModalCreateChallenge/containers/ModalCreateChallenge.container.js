import { connect } from "react-redux";
import * as actions from "./../../../redux/actions/create-challenge";

const mapState = state => ({
  view: state.createChallenge.present.view,
  rounds: state.createChallenge.present.rounds
});

const mapDispatch = dispatch => ({
  onSelectChallenger: challenger =>
    dispatch(actions.storeChallenger(challenger)),
  onSelectRounds: rounds => dispatch(actions.storeRounds(rounds)),
  onPrev: () => dispatch(actions.undo())
});

export default connect(mapState, mapDispatch);
