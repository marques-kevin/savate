import { connect } from "react-redux";

const mapState = state => ({
  page: state.page
});

const mapDispatch = () => ({
  onSubmitSignin: () => false
});

export default connect(mapState, mapDispatch);
