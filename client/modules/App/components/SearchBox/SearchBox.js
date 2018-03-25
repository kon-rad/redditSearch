import React, { Component, PropTypes } from 'react';

// Import Style
import styles from './SearchBox.css';

class SearchBox extends Component {
  makeSearch = () => {
    const searchQueryRef = this.refs.searchQuery;
    if (searchQueryRef.value) {
      this.props.makeSearch(searchQueryRef);
      searchQuery.value = '';
    }
  }

  render() {
    return (
      <div className={styles.search_container}>
        <input className={styles.search_input} placeholder="search all of reddit" ref="searchQuery" type="text" />
        <a className={styles.search_button} href="#" onClick={this.makeSearch}>Submit</a>
      </div>
    );
  }
}

SearchBox.propTypes = {
  makeSearch: PropTypes.func.isRequired,
};

export default SearchBox;
