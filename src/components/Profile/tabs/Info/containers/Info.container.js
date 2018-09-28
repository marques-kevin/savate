import { connect } from "react-redux";
import * as actions from "./../../../../../redux/actions/auth";

const mapState = ({ auth }) => ({
  username: auth.user.username,
  email: auth.user.email,
  lastName: auth.user.lastName,
  firstName: auth.user.firstName,
  character: auth.user.character
});

const mapDispatch = dispatch => ({
  onUpdate: (label, value) => dispatch(actions.fetchUpdateInfo(label, value)),
  onLogout: () => dispatch(actions.fetchLogout())
});

export default connect(mapState, mapDispatch);
