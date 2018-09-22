import { connect } from "react-redux";
import * as actions from "./../../../redux/actions/create-challenge";

const mapState = state => ({
  view: state.createChallenge.present.view
});

const mapDispatch = dispatch => ({
  onSelectChallenger: challenger =>
    dispatch(actions.storeChallenger(challenger)),
  onPrev: () => dispatch(actions.undo())
});

export default connect(mapState, mapDispatch);
