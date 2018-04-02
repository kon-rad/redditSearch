import React, { PropTypes } from 'react';
import Row from 'awesome-possum/lib/Row';
import SearchListItem from './SearchListItem/SearchListItem'

function SearchList(props) {
  return (
    <div  className="searchList_wrapper">
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

SearchList.propTypes = {
  searchItems: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default SearchList;
