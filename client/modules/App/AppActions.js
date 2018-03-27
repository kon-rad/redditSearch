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

export function displayResults(results) {
  console.log('inside displayresults AppActions.js', results);

  return {
    type: DISPLAY_RESULTS,
    results,
  };
}

export function makeSearch(searchQuery) {
  console.log('inside appActions.js', searchQuery);
  // return {
  //   type: MAKE_SEARCH,
  // }
  return (dispatch) => {

    return callRedditApi(searchQuery.searchQuery, 10).then(res => {
      dispatch(displayResults(res));
    });
  }
  // return (dispatch) => {
  //   return callRedditApi('searchQuery', 10).then(res => dispatch(displayResults(res.post)));
  // }
}
