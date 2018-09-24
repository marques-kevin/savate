import { connect } from "react-redux";
import * as actions from "./../../../redux/actions/challenge";
import * as createChallenge from "./../../../redux/actions/create-challenge";
import * as auth from "./../../../redux/actions/auth";

const mapState = state => ({
  challenges: state.challenge.live.content,
  isCreateOpen: state.createChallenge.isOpen,
  fetching: state.challenge.fetching,
  isConnected: state.auth.isConnected
});

const mapDispatch = dispatch => ({
  onMount: () => dispatch(actions.fetchLiveChallenges()),
  onClickCreateChallenge: isConnected => {
    if (isConnected) return dispatch(createChallenge.open());
    return dispatch(auth.open());
  }
});

export default connect(mapState, mapDispatch);
