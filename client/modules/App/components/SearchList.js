import React, { PropTypes } from 'react';
import Row from 'awesome-possum/lib/Row';
import SearchListItem from './SearchListItem/SearchListItem'

function SearchList(props) {
  return (
    <div  className="searchList_wrapper">
      <Row>                
        {
          props.searchItems.map(searchItem => (
            <SearchListItem searchItem={searchItem} />
          ))
        }
      </Row>
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
