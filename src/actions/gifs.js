import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_GIFS_SUCCESS = 'FETCH_GIFS_SUCCESS';
export const fetchGifsSuccess = gifs => ({
  type: FETCH_GIFS_SUCCESS,
  gifs
});

export const FETCH_GIFS_ERROR = 'FETCH_GIFS_ERROR';
export const fetchGifsError = error => ({
  type: FETCH_GIFS_ERROR,
  error
});

export const UPDATE_SEARCH_TERM = 'UPDATE_SEARCH_TERM';
export const updateSearchTerm = searchTerm => ({
  type: UPDATE_SEARCH_TERM,
  searchTerm
})

export const fetchGifs = searchTerm => dispatch => {

  return fetch(`${API_BASE_URL}/giphy`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({searchTerm})
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then(gifs => dispatch(fetchGifsSuccess(gifs)))
  .catch(err => {
    console.log(err);
  })
}

export const SAVE_FAVORITE_SUCCESS = 'SAVE_FAVORITE_SUCCESS';
export const saveFavoriteSuccess = favorites => ({
  type: SAVE_FAVORITE_SUCCESS,
  favorites
})

export const SAVE_FAVORITE_ERROR = 'SAVE_FAVORITE_ERROR';
export const saveFavoriteError = error => ({
  type: SAVE_FAVORITE_ERROR,
  error
})

export const saveFavorite = (username, favorite) => (dispatch, getState) => {

  const authToken = getState().auth.authToken;

  return fetch(`${API_BASE_URL}/giphy/favorites`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify({ username, favorite })
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then(favorites => dispatch(saveFavoriteSuccess(favorites)))
  .catch(err => {
    console.log(err);
  })
}