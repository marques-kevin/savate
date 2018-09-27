import { connect } from "react-redux";
import actions from "./../../../redux/actions";

const mapState = state => ({
  page: state.auth.page,
  fetching: state.auth.fetching,
  isOpen: state.auth.isOpen
});

const mapDispatch = dispatch => ({
  onSubmitSignin: ({ email, password }) =>
    dispatch(actions.auth.fetchAuthenticate({ email, password })).then(() => {
      dispatch(actions.notification.fetchGetChallenges());
      dispatch(actions.router.goBack());
    }),
  onSubmitRegister: info =>
    dispatch(actions.auth.fetchRegister(info)).then(() => {
      dispatch(actions.notification.fetchGetChallenges());
      dispatch(actions.router.goBack());
    }),
  onRegisterTab: () => dispatch(actions.auth.changePageToRegister()),
  onSigninTab: () => dispatch(actions.auth.changePageToSignin()),
  onCancel: () => dispatch(actions.router.goBack())
});

export default connect(mapState, mapDispatch);
