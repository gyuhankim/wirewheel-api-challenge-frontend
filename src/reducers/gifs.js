import {
  FETCH_GIFS_SUCCESS,
  FETCH_GIFS_ERROR,
  UPDATE_SEARCH_TERM,
  SAVE_FAVORITE_SUCCESS,
  SAVE_FAVORITE_ERROR
} from '../actions/gifs';

const initialState = {
  gifs: [],
  searchTerm: '',
  favorites: [],
  error: null
}

export default function reducer(state = initialState, action) {
  switch (action.type) {

    case FETCH_GIFS_SUCCESS:
    return {
      ...state,
      gifs: action.gifs
    }

    case FETCH_GIFS_ERROR:
    return {
      ...state,
      error: action.error
    }

    case UPDATE_SEARCH_TERM:
    return {
      ...state,
      searchTerm: action.searchTerm
    }

    case SAVE_FAVORITE_SUCCESS:
    return {
      ...state,
      favorites: action.favorites
    }

    case SAVE_FAVORITE_ERROR:
    return {
      ...state,
      error: action.error
    }

    default:
    return state

  }
}