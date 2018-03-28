import React, { PropTypes } from 'react';
import { Link } from 'react-router';

// Import Style
import styles from './SearchListItem.css';

function SearchListItem(props) {
  console.log('heres inside SearchListItem. props: ', props);
  return (
    <div className={styles['search_item']}>
      <h5 className={styles['search_item__title']}>{props.searchItem.data.title}</h5>
      <span className={styles['search_item__author']}>{props.searchItem.data.author}</span>
      <p className={styles['search_item__content']}>{props.searchItem.data.selftext}</p>
      <a className={styles['search_item__link']} href={props.searchItem.data.url}>read more</a>

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
