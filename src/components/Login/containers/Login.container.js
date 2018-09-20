import { connect } from "react-redux";
import * as actions from "./../../../redux/actions/auth";

const mapState = state => ({
  page: state.auth.page,
  fetching: state.auth.fetching
});

const mapDispatch = dispatch => ({
  onSubmitSignin: ({ email, password }) =>
    dispatch(actions.fetchAuthenticate({ email, password })),
  onSubmitRegister: ({ email, password }) =>
    dispatch(actions.fetchRegister({ email, password })),
  onRegisterTab: () => dispatch(actions.changePageToRegister())
});

export default connect(mapState, mapDispatch);
