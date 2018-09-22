import { connect } from "react-redux";
import { push } from "connected-react-router";

const mapState = state => ({
  pathname: state.router.location.pathname,
  search: state.router.location.search
});

const mapDispatch = dispatch => ({
  onClick: to => dispatch(push(to))
});

export default connect(mapState, mapDispatch);
