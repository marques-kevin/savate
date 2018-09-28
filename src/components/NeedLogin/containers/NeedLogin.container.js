import { connect } from "react-redux";
import actions from "./../../../redux/actions";

const mapState = state => ({
  fetching: state.auth.fetching
});

const mapDispatch = (dispatch, props) => ({
  onClickButton: () => dispatch(actions.router.push("/login"))
});

export default connect(mapState, mapDispatch);
