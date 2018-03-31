import React, { Component, PropTypes } from 'react';

// Import Style
import styles from './SearchBox.css';

class SearchBox extends Component {
  makeSearch = (e) => {
    e.preventDefault();
    const searchQueryRef = this.refs.searchQuery;
    if (searchQueryRef.value) {
      this.props.makeSearch(searchQueryRef.value);
      searchQueryRef.value = '';
    }
  }

  render() {
    return (
      <div className={styles.search_container}>
        <form className={styles.search_form}>
          <input className={styles.search_input} placeholder="search all of reddit" ref="searchQuery" type="text" />
          <button type="submit" className={styles.search_button} onClick={this.makeSearch}>Submit</button>
        </form>
      </div>
    );
  }
}

SearchBox.propTypes = {
  makeSearch: PropTypes.func.isRequired,
};

export default SearchBox;
