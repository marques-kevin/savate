import { connect } from "react-redux";

const mapState = ({ auth }) => ({
  authenticated: auth.isConnected,
  ranking: auth.user.ranking,
  character: auth.user.character,
  username: auth.user.username,
  userId: auth.user.id
});

const mapDispatch = () => ({});

export default connect(mapState, mapDispatch);
