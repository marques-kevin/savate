import { connect } from "react-redux";
import actions from "./../../../../../redux/actions";

const mapState = state => {
  const selected = state.challenge.selected;
  const winner = selected.user
    ? selected.user.winner ? "user" : "challenger"
    : null;

  return {
    challenge: selected,
    loading: state.challenge.fetching,
    winner,
    score: !winner ? [0, 0] : [selected.user.score, selected.challenger.score]
  };
};

const mapDispatch = (dispatch, props) => ({
  onMount: () => dispatch(actions.challenge.fetchChallenge(props.id)),
  onClickUser: id => dispatch(actions.router.push(`/profile/${id}`))
});

export default connect(mapState, mapDispatch);
