import React, { PropTypes } from 'react';

// Import Components
import SearchListItem from './SearchListItem/SearchListItem';

function SearchList(props) {
  console.log('heres SearchList. props: ', props);
  return (
    <div className="search_list_view">
      {
        props.searchItems.map(searchItem => (
          <div>
            <h1>hi heres list</h1>
          <SearchListItem
            searchItem={searchItem}
            key={searchItem.cuid}
          />
          </div>
        ))
      }
    </div>
  );
}

SearchList.propTypes = {
  searchItem: PropTypes.arrayOf(PropTypes.shape({
    data: {
      thumbnail: PropTypes.string.isRequired,
      autor: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      subreddit_name_prefixed: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }
  })).isRequired,
};

export default SearchList;
