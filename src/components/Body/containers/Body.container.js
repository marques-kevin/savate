import { connect } from "react-redux";
import * as actions from "./../../../redux/actions/auth";

const mapState = state => ({});

const mapDispatch = dispatch => ({
  onMount: () => dispatch(actions.fetchIsAuthenticated())
});

export default connect(mapState, mapDispatch);
