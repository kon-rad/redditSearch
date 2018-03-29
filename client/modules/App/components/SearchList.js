import React, { PropTypes } from 'react';
import Row from 'awesome-possum/lib/Row';
import Col from 'awesome-possum/lib/Col';
import Card from 'awesome-possum/lib/Card';
import Button from 'awesome-possum/lib/Button';

// Import Style
import styles from './SearchList.css';

function SearchList(props) {
  console.log('heres SearchList. props: ', props);
  return (
    <div  className="searchList_wrapper">
      <Row>                
        {
          props.searchItems.map(searchItem => (
              <Col  large={10} largeCentered>
                <Card>
                  <Card.Header>
                    <Row className="rev-Row--flex rev-Row--middle">
                      <Col>
                        <a className={styles['search_item__link']} href={searchItem.data.url}>{searchItem.data.title}</a>
                      </Col>
                      <Col shrink>
                      <img src={searchItem.data.thumbnail} className="ResponsiveImage" /> 
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
