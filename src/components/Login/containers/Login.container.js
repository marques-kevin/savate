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
  onSubmitRegister: ({ email, password, username }) =>
    dispatch(actions.fetchRegister({ email, password, username })),
  onRegisterTab: () => dispatch(actions.changePageToRegister()),
  onCancel: () => dispatch(actions.close())
});

export default connect(mapState, mapDispatch);
