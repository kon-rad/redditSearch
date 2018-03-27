// Import Actions
import { TOGGLE_ADD_POST } from './AppActions';
import { MAKE_SEARCH } from './AppActions';
import { DISPLAY_RESULTS } from './AppActions';


// Initial State
const initialState = {
  showAddPost: false,
  searchItems: [],
  searchBoxTest: 0,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ADD_POST:
      return {
        showAddPost: !state.showAddPost,
      };
    case MAKE_SEARCH:
      console.log('inside AppReducer ');

      return {
        searchBoxTest: state.searchBoxTest + 1,
      };
    case DISPLAY_RESULTS:
      console.log('inside displayresults appreducer ', action);

      return {
        searchItems: action.results.data.children,
      };

    default:
      return state;
  }
};


/* Selectors */

/* Selectors */

// Get all posts
export const getSearchResults = state => state.data;

// Get showAddPost
// export const getShowAddPost = state => state.app.showAddPost;

// Get showAddPost
// export const getResults = state => state.app.data;

// Export Reducer
export default AppReducer;
