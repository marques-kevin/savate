import { connect } from "react-redux";
import * as actions from "./../../../redux/actions/challenge";

const mapState = state => ({
  challenges: state.challenge.live.content,
  isCreateOpen: state.challenge.create.isOpen,
  fetching: state.challenge.fetching
});

const mapDispatch = dispatch => ({
  onMount: () => dispatch(actions.fetchLiveChallenges()),
  onClickCreateChallenge: () => dispatch(actions.openCreateChallenge())
});

export default connect(mapState, mapDispatch);
