import { connect } from "react-redux";
import actions from "./../../../redux/actions";

const mapState = state => ({
  isCreateOpen: state.createChallenge.isOpen,
  isConnected: state.auth.isConnected
});

const mapDispatch = dispatch => ({
  onClickCreateChallenge: isConnected => {
    if (isConnected) return dispatch(actions.createChallenge.open());
    return dispatch(actions.auth.open());
  }
});

export default connect(mapState, mapDispatch);
