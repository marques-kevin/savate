import { connect } from "react-redux";
import actions from "./../../../../../redux/actions";

const mapState = state => ({
  challenges: state.challenge.history.content
});

const mapDispatch = dispatch => ({
  onMount: () => dispatch(actions.challenge.fetchHistoryChallenge()),
  onClickChallenge: id => dispatch(actions.router.push(`/challenge/${id}`)),
  onClickUser: id => dispatch(actions.router.push(`/profile/${id}`))
});

export default connect(mapState, mapDispatch);
