import { connect } from "react-redux";
import actions from "./../../../redux/actions";

const mapState = ({ profile }, props) => ({
  username: profile.user.username,
  ranking: profile.user.ranking,
  character: profile.user.character,
  userId: props.match.params.id
});

const mapDispatch = (dispatch, props) => ({
  onBack: () => dispatch(actions.router.goBack()),
  onMount: () => dispatch(actions.profile.fetchUser(props.match.params.id))
});

export default connect(mapState, mapDispatch);
