import { connect } from "react-redux";
import actions from "./../../../redux/actions";

const mapState = state => {
  const selected = state.challenge.selected;

  return {
    challenge: selected,
    versus: !selected.user
      ? `Chargement...`
      : `${selected.user.username} vs ${selected.challenger.username}`,
    loading: state.challenge.fetching
  };
};

const mapDispatch = (dispatch, props) => ({
  onMount: () =>
    dispatch(actions.challenge.fetchChallenge(props.match.params.id)),
  onBack: () => dispatch(actions.router.goBack())
});

export default connect(mapState, mapDispatch);
