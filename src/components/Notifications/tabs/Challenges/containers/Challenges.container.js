import { connect } from "react-redux";

const mapState = state => ({
  challenges: state.notification.challenges
});

const mapDispatch = dispatch => ({});

export default connect(mapState, mapDispatch);
