import React, { PropTypes } from 'react';
import { Link } from 'react-router';

// Import Style
import styles from './SearchListItem.css';

function SearchListItem(props) {
  return (
    <div className={styles['search_item']}>
      <h3 className={styles['search_item--title']}>Search Result Item
        <Link to={`${props.searchItems.url}`} >
          {props.searchItems.title}
        </Link>
      </h3>
      <p className={styles['search_item--author']}> {props.searchItems.author}</p>
      <p className={styles['search_item--content']}>{props.searchItems.subreddit_name_prefixed}</p>
      <hr className={styles.divider} />
    </div>
  );
}

SearchListItem.propTypes = {
  searchItems: PropTypes.arrayOf(PropTypes.shape({
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
