import React, { PropTypes } from 'react';

// Import Components
import SearchListItem from './SearchListItem/SearchListItem';

function SearchList(props) {
  return (
    <div className="search_list_view">
      {
        props.searchItems.map(searchItem => (
          <SearchListItem
            searchItem={searchItem}
            key={searchItem.cuid}
          />
        ))
      }
    </div>
  );
}

SearchList.propTypes = {
  searchItems: PropTypes.arrayOf(PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    autor: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    subreddit_name_prefixed: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  })).isRequired,
};

export default SearchList;
