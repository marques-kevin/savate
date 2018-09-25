import { connect } from "react-redux";
import actions from "./../../../redux/actions";

const mapState = state => ({
  challenges: state.challenge.live.content,
  isCreateOpen: state.createChallenge.isOpen,
  fetching: state.challenge.fetching,
  isConnected: state.auth.isConnected
});

const mapDispatch = dispatch => ({
  onMount: () => dispatch(actions.challenge.fetchLiveChallenges()),
  onClickChallenge: id => dispatch(actions.router.push(`/challenge/${id}`)),
  onClickCreateChallenge: isConnected => {
    if (isConnected) return dispatch(actions.createChallenge.open());
    return dispatch(actions.auth.open());
  }
});

export default connect(mapState, mapDispatch);
