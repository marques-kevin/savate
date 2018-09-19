import { connect } from "react-redux";
import * as actions from "./../../../redux/actions/auth";

const mapState = state => ({
  page: state.auth.page
});

const mapDispatch = dispatch => ({
  onSubmitSignin: ({ email, password }) =>
    dispatch(actions.fetchAuthenticate({ email, password })),
  onRegisterTab: () => dispatch(actions.changePageToRegister())
});

export default connect(mapState, mapDispatch);
