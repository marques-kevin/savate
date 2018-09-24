import { connect } from "react-redux";
import * as actions from "./../../../redux/actions/create-challenge";

const mapState = state => ({
  view: state.createChallenge.present.view,
  rounds: state.createChallenge.present.rounds,
  isOpen: state.createChallenge.isOpen
});

const mapDispatch = dispatch => ({
  onSelectChallenger: challenger =>
    dispatch(actions.storeChallenger(challenger)),
  onSelectRounds: rounds => dispatch(actions.storeRounds(rounds)),
  onPrev: () => dispatch(actions.undo()),
  onClose: () => dispatch(actions.close())
});

export default connect(mapState, mapDispatch);
