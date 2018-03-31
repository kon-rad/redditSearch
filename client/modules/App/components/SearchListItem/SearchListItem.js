import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Row from 'awesome-possum/lib/Row';
import Col from 'awesome-possum/lib/Col';
import Card from 'awesome-possum/lib/Card';
import Button from 'awesome-possum/lib/Button';

// Import Style
import styles from './SearchListItem.css';

function SearchListItem(props) {
  return (
      <Col  large={10} largeCentered>
        <Card>
          <Card.Header>
            <Row className="rev-Row--flex rev-Row--middle">
              <Col>
                <a className={styles['search_item__link']} href={props.searchItem.data.url}>{props.searchItem.data.title}</a>
              </Col>
              <Col shrink>
              <img src={props.searchItem.data.thumbnail.includes('https://') ? props.searchItem.data.thumbnail : require('../../../../assets/reddit_thumbnail.png')} className={styles['search_item__thumbnail']} /> 
              </Col>
            </Row>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
  );
}

SearchListItem.propTypes = {
  searchItem: PropTypes.shape(PropTypes.shape({
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
