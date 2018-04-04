import callRedditApi from '../../util/redditApiCaller';

// Export Constants
export const DISPLAY_RESULTS = 'DISPLAY_RESULTS';
export const MAKE_SEARCH = 'MAKE_SEARCH';

// Export Actions
export function displayResults(results) {
  return {
    type: DISPLAY_RESULTS,
    results,
  };
}

export function makeSearch(searchQuery) {
  return (dispatch) => {
    return callRedditApi(searchQuery.searchQuery, 10).then(res => {
      dispatch(displayResults(res));
    });
  };
}
