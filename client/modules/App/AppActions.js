import callRedditApi from '../../util/redditApiCaller';

// Export Constants
export const TOGGLE_ADD_POST = 'TOGGLE_ADD_POST';
export const DISPLAY_RESULTS = 'DISPLAY_RESULTS';
export const MAKE_SEARCH = 'MAKE_SEARCH';

// Export Actions
export function toggleAddPost() {
  return {
    type: TOGGLE_ADD_POST,
  };
}

export function displayResults() {
  return {
    type: DISPLAY_RESULTS,
  }
}

export function makeSearch(searchQuery) {
  return (dispatch) => {
    return callRedditApi('searchQuery', 10).then(res => dispatch(displayResults(res.post)));
  }
}
