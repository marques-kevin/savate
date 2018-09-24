import { connect } from "react-redux";
import * as actions from "./../../../redux/actions/challenge";
import * as auth from "./../../../redux/actions/auth";

const mapState = state => ({
  challenges: state.challenge.live.content,
  isCreateOpen: state.challenge.create.isOpen,
  fetching: state.challenge.fetching,
  isConnected: state.auth.isConnected
});

const mapDispatch = dispatch => ({
  onMount: () => dispatch(actions.fetchLiveChallenges()),
  onClickCreateChallenge: isConnected => {
    if (isConnected) return dispatch(actions.openCreateChallenge());
    return dispatch(auth.open());
  }
});

export default connect(mapState, mapDispatch);
