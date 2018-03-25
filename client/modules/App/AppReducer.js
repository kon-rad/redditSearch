// Import Actions
import { TOGGLE_ADD_POST } from './AppActions';

// Initial State
const initialState = {
  showAddPost: false,
  data: [],
  makeSearch: 0,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ADD_POST:
      return {
        showAddPost: !state.showAddPost,
      };
    case MAKE_SEARCH:
      return {
        makeSearch: state.makeSearch + 1,
      };

    default:
      return state;
  }
};

/* Selectors */

// Get showAddPost
export const getShowAddPost = state => state.app.showAddPost;

// Get showAddPost
export const getResults = state => state.app.data;

// Export Reducer
export default AppReducer;
