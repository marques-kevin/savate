import * as types from "../constants/auth";
import Api from "./../utils/api";

/**
 * Permet de changer la valeur de la recherche
 * @param {string} value
 */
export const changeSearchValue = value => ({
  type: types.changeSearchValue,
  value
});

/**
 * Permet de changer la valeur de la recherche
 * @param {string} value
 */
export const storeauth = ({ search, auth }) => ({
  type: types.storeauth,
  search,
  auth
});

/**
 * Permet d'ajouter de nouveaux livre aux livre actuel
 * @param {Array<*>} auth - Les livre à ajouter
 */
export const addauth = ({ auth, search }) => ({
  type: types.addauth,
  auth,
  search
});

/**
 * Permet de dire que la recherche est lancée
 * @param {string} search - La valeur recherchée
 */
export const fetching = search => ({
  type: types.fetching,
  search
});

/**
 * Permet de dire que la recherche est terminée
 * @param {string} search - La valeur recherchée
 */
export const fetchEnd = search => ({
  type: types.fetchEnd,
  search
});

/**
 * Permet d'ajouter des feeds à une source
 * @param {string} name - Le nom de la source
 * @param {object} feeds - La liste des feeds
 */
export const changeSearchAndFetch = value => (dispatcher, getState) => {
  dispatcher(changeSearchValue(value));
  dispatcher(fetching(value));

  return Api.searchauth({ query: value, page: 1 }).then(auth => {
    dispatcher(fetchEnd(value));
    return dispatcher(storeauth({ search: value, auth }));
  });
};

/**
 * Permet de récupérer des nouveaux livres
 */
export const fetchMore = () => (dispatcher, getState) => {
  const { auth: { search, page } } = getState();
  dispatcher(fetching(search));

  return Api.searchauth({ query: search, page: page + 1 }).then(auth => {
    dispatcher(fetchEnd(search));
    return dispatcher(addauth({ auth, search }));
  });
};
