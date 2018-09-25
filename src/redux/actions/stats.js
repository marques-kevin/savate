import * as types from "../constants/stats";
import * as Models from "./../../utils/models";

export const storeStats = stats => ({
  type: types.storeStats,
  payload: { stats }
});

export const fetching = () => ({
  type: types.fetching
});

export const fetchEnd = () => ({
  type: types.fetchEnd
});

export const fetchStats = userId => dispatcher => {
  dispatcher(fetching());

  return Models.getStatsFromUser(userId).then(stats => {
    dispatcher(fetchEnd());
    dispatcher(storeStats(stats));
  });
};
