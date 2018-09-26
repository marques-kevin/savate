import { connect } from "react-redux";
import * as actions from "./../../../redux/actions/auth";

const mapState = state => ({
  page: state.auth.page,
  fetching: state.auth.fetching,
  isOpen: state.auth.isOpen
});

const mapDispatch = dispatch => ({
  onSubmitSignin: ({ email, password }) =>
    dispatch(actions.fetchAuthenticate({ email, password })),
  onSubmitRegister: info => dispatch(actions.fetchRegister(info)),
  onRegisterTab: () => dispatch(actions.changePageToRegister()),
  onSigninTab: () => dispatch(actions.changePageToSignin()),
  onCancel: () => dispatch(actions.close())
});

export default connect(mapState, mapDispatch);
