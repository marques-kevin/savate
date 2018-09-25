import { connect } from "react-redux";
import actions from "./../../../../../redux/actions";

const mapState = state => ({
  challenges: state.notification.challenges
});

const mapDispatch = dispatch => ({
  onView: id => dispatch(actions.router.push(`/challenge/${id}`)),
  onAccept: id => dispatch(actions.notification.fetchAcceptChallenge(id)),
  onDecline: id => dispatch(actions.notification.fetchDeclineChallenge(id))
});

export default connect(mapState, mapDispatch);
