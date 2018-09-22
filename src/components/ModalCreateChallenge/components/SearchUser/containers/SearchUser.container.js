import { connect } from "react-redux";
import * as actions from "./../../../../../redux/actions/search-user";

const mapState = state => ({
  input: state.searchUser.input,
  fetching: state.searchUser.fetching,
  users: state.searchUser.users
});

const mapDispatch = dispatch => ({
  onSearchUser: value => dispatch(actions.fetchSearchUser(value))
});

export default connect(mapState, mapDispatch);
