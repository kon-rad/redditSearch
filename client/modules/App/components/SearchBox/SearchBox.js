import React, { Component } from 'react';

// Import Style
import styles from './SearchBox.css';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false };
  }

  componentDidMount() {
    this.setState({isMounted: true}); // eslint-disable-line
  }

  render() {
    return (
      <div className={styles.search_container}>
        <form className={styles.search_form} action method="POST">
          <input className={styles.search_input} placeholder="search all of reddit" name="search_query" type="text" />
          <input className={styles.search_button} type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default SearchBox;
