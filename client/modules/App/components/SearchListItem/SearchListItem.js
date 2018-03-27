import React, { PropTypes } from 'react';
import { Link } from 'react-router';

// Import Style
import styles from './SearchListItem.css';

function SearchListItem(props) {
  console.log('heres inside SearchListItem. props: ', props);
  return (
    <div className={styles['search_item']}>
      <h3 className={styles['search_item--title']}>Search Result Item</h3>
      <h1>{props.searchItem.data.author}</h1>

    </div>
  );
}

SearchListItem.propTypes = {
  searchItem: PropTypes.arrayOf(PropTypes.shape({
    data: {
      thumbnail: PropTypes.string.isRequired,
      autor: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      subreddit_name_prefixed: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      cuid: PropTypes.string.isRequired,
    }
  })).isRequired,
};

export default SearchListItem;
