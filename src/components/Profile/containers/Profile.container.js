import { connect } from "react-redux";

const mapState = ({ auth }) => ({
  ranking: auth.user.ranking,
  character: auth.user.character
});

const mapDispatch = () => ({});

export default connect(mapState, mapDispatch);
