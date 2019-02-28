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

export const fetchGifs = searchTerm => (dispatch) => {

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