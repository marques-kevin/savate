import { connect } from "react-redux";
import actions from "./../../../../../redux/actions";

const mapState = ({ stats, challenge }) => ({
  user: challenge.selected.user,
  challenger: challenge.selected.challenger,
  challenges: stats.challenges,
  totalChallenge: stats.totalChallenge,
  totalChallengeWin: stats.totalChallengeWin,
  totalChallengeLoose: stats.totalChallengeLoose,
  totalRounds: stats.totalRounds,
  totalRoundsWin: stats.totalRoundsWin,
  totalRoundLoose: stats.totalRoundLoose
});

const mapDispatch = (dispatch, props) => ({
  onMount: (userId, challengerId) =>
    dispatch(actions.stats.fetchStatsVs(userId, challengerId)),
  onClickResult: id => dispatch(actions.router.push(`/challenge/${id}`))
});

export default connect(mapState, mapDispatch);
