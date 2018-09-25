import { connect } from "react-redux";
import { push } from "connected-react-router";

const mapState = state => ({
  pathname: state.router.location.pathname,
  search: state.router.location.search,
  hasNotifications: state.notification.challenges.length > 0
});

const mapDispatch = dispatch => ({
  onClick: to => dispatch(push(to))
});

export default connect(mapState, mapDispatch);
