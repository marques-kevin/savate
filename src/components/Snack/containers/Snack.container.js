import { connect } from "react-redux";
import actions from "./../../../redux/actions";

const mapState = state => ({
  isOpen: state.snack.open,
  message: state.snack.message
});

const mapDispatch = dispatch => ({
  onClose: () => dispatch(actions.snack.close())
});

export default connect(mapState, mapDispatch);
