// Import Actions
import { TOGGLE_ADD_POST } from './AppActions';
import { MAKE_SEARCH } from './AppActions';
import { DISPLAY_RESULTS } from './AppActions';

// Initial State
const initialState = {
  showAddPost: false,
  data: [],
  searchBoxTest: 0,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ADD_POST:
      return {
        showAddPost: !state.showAddPost,
      };
    case MAKE_SEARCH:

      return {
        searchBoxTest: state.searchBoxTest + 1,
      };
    case DISPLAY_RESULTS:

      return {
        data: action.results.data.children,
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all posts
export const getSearchResults = (state) => {
  return state.app.data;
}

// Export Reducer
export default AppReducer;
