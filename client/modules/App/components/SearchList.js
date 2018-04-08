import React, { PropTypes } from 'react';
import Row from 'awesome-possum/lib/Row';
import SearchListItem from './SearchListItem/SearchListItem';

function SearchList(props) {
  if (props.searchItems) {
    return (
      <div className="searchList_wrapper">
        <Row>
          {
              props.searchItems.map(searchItem => (
                <SearchListItem key={searchItem.data.id} searchItem={searchItem} />
              ))
          }
        </Row>
      </div>
    );
  }
  return null;
}

SearchList.propTypes = {
  searchItems: PropTypes.arrayOf(PropTypes.shape({})),
};

export default SearchList;
