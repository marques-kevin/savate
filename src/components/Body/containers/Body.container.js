import { connect } from "react-redux";
import actions from "./../../../redux/actions";

const mapState = state => ({});

const mapDispatch = dispatch => ({
  onMount: () => {
    dispatch(actions.auth.fetchIsAuthenticated()).then(() =>
      dispatch(actions.notification.fetchGetChallenges())
    );
  }
});

export default connect(mapState, mapDispatch);
