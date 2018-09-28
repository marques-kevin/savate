import { connect } from "react-redux";

const mapState = ({ auth }) => ({
  authenticated: auth.isConnected
});

const mapDispatch = () => ({});

export default connect(mapState, mapDispatch);
